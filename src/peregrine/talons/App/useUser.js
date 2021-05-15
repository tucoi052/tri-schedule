import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { k61 } from '../../../tlu-schedule/index';
import AppContext from '../../store/context/appContext';
import { getAll } from '../../utils/convertToTimetable';

const useUser = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSplash, setIsSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { dispatch } = useContext(AppContext);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    AsyncStorage.multiGet(['username', 'password', 'userInfo'])
      .then(([, , userInfo]) => {
        if (userInfo[1]) {
          setIsLogin(true);
          setCurrentUser(JSON.parse(userInfo[1]));
        }
      })
      .catch(() => {
        setIsLogin(false);
      })
      .finally(() => {
        setIsSplash(false);
      });
  }, []);

  const handleLogin = (username, password) => {
    setIsLoading(true);
    setError(null);

    if (username === '' || password === '') {
      setError('Thiếu tên đăng nhập hoặc mật khẩu');
      return;
    }
    k61
      .auth({ username, password })
      .then(async (res) => {
        console.log(res)
        if (res.error && res.error == 'invalid_grant') {
          throw new Error('Thông tin tài khoản và mật khẩu ko chính xác');
        }
        const _currentUser = await k61.getCurrentUser();
        await AsyncStorage.setItem('username', username);

        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('userInfo', JSON.stringify(_currentUser));
        setCurrentUser(_currentUser);
      })
      .catch((error) => {
        console.log({error})
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const getTimetable = async () => {
    const { id } = await k61.getSemesterInfo(); // get id of current semester
    const schedules = await k61.getStudentCourseSubject(id);
    const timetables = getAll(schedules);
    AsyncStorage.setItem('timetables', JSON.stringify(timetables));
  };

  useEffect(() => {
    if (currentUser) {
      getTimetable();
      dispatch({
        type: 'SET_USER',
        data: currentUser,
      });
    }
  }, [currentUser]);

  return {
    isLogin,
    isSplash,
    handleLogin,
    isLoading,
    currentUser,
    error,
  };
};

export default useUser;
