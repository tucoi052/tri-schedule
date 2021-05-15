import { useCallback, useEffect, useMemo, useState } from "react";
import { k61 } from "tlu-schedule";

export const useSchedule = (props) => {
  const { username, password } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [schedules, setSchedules] = useState();
  const [error, setError] = useState();

  const handleLogin = useCallback(async () => {
    setIsLoading(true);
    try {
      await k61.auth({ username, password });
      const result = await k61.getCurrentUser();
      setUserInfo(result);
    } catch (err) {
      setError(err.message);
    }
  }, [username, password]);

  const getSchedule = useCallback(async () => {
    const { id } = await k61.getSemesterInfo(); // get id of current semester
    const schedules = await k61.getStudentCourseSubject(id);
    setSchedules(schedules);
  }, [userInfo, username, password]);


  useEffect(() => {
    setError(null);
  }, [userInfo]);



  return {
    isLoading,
    handleLogin,
    getSchedule,
    schedules, 
    error,
    userInfo,
  };
};
