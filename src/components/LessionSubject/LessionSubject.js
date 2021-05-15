import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  subject: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    width: '98%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  time: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#BDBDBD',
    padding: 10,
  },
  timeStart: {
    color: '#17C554',
    fontWeight: 'bold',
    fontSize: 15,
  },
  timeEnd: {
    color: '#17C554',
    fontWeight: 'bold',
    fontSize: 15,
  },
  infor: {
    paddingLeft: 10,
  },
  subjectName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4F4F4F',
    marginTop: 5,
    maxWidth: 305,
  },
  subjectRoom: {
    color: '#4F4F4F',
    marginTop: 5,
    fontSize: 13,
  },
});
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const Item = ({ item }) => {
  console.log({ item });
  return (
    <View style={styles.subject}>
      <View style={styles.time}>
        <Text style={styles.timeStart}>{item.startHour.startString}</Text>
        <Text style={styles.timeEnd}>{item.endHour.endString}</Text>
      </View>
      <View style={styles.infor}>
        <Text style={styles.subjectName}>{item.subjectName}</Text>
        <Text style={styles.subjectRoom}>{item.roomName}</Text>
      </View>
    </View>
  );
};

export const SubjectItem = Item;

const LesssionSubject = () => {
  const [timetables, setTimetables] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('timetables').then((data) => {
      setTimetables(JSON.parse(data));
    });
  }, []);
  const todayLessions = timetables && timetables[moment().format('DD/MM/YYYY')];
  return (
    <View class={styles.root}>
      {todayLessions && todayLessions.length > 0 ? (
        <FlatList
          data={todayLessions}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>Hôm nay ko có lịch học</Text>
      )}
    </View>
  );
};
export default LesssionSubject;
