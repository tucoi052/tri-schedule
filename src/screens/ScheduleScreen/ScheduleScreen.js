import React, { useEffect, useState, useMemo } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SubjectItem as Item } from '../../components/LessionSubject/LessionSubject';
LocaleConfig.locales['vi'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  dayNames: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  today: 'Hôm nay',
};
LocaleConfig.defaultLocale = 'vi';
import moment from 'moment';
moment.locale('vi');
import styles from './style';
import INews from '../../assets/icons/news.icon';

const ScheduleScreen = (props) => {
  const [timetables, setTimetables] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('timetables').then((data) => {
      setTimetables(JSON.parse(data));
    });
  }, []);
  const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));

  const currentLession = useMemo(() => {
    const dateFormat = moment(currentDate).format('dddd, DD/MM/YYYY');
    // console.log({ dateFormat });
    const subjects = timetables[moment(currentDate).format('DD/MM/YYYY')];
    return (
      <View style={styles.currentDayLesson}>
        <Text style={styles.smallText}>Đang chọn</Text>
        <Text style={styles.currentDateHeading}>{dateFormat}</Text>
        <View style={styles.subjectList}>
          {subjects && subjects.length > 0 ? (
            <FlatList
              data={subjects}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={(item, key) => key}
            />
          ) : (
            <View style={styles.noSubject}>
              <INews />
              <Text style={styles.noSubjectTitle}>Danh sách tiết trống.</Text>
              <Text style={styles.noSubjectDescription}>
                Hôm nay bạn không có tiết nào.{' '}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }, [currentDate]);

  return (
    <View style={styles.container}>
      <Calendar
        // Initially visible month. Default = Date()
        current={currentDate}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          setCurrentDate(day.dateString);
        }}
        firstDay={1}
        enableSwipeMonths={true}
        markedDates={{
          [currentDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: '#18A64A',
            selectedTextColor: 'white',
          },
        }}
      />

      {currentLession}
    </View>
  );
};

export default ScheduleScreen;
