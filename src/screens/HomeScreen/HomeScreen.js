import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import LesssionSubject from '../../components/LessionSubject';
import ICalender from '../../assets/icons/calender.ico';
import IPen from '../../assets/icons/pen.ico';
import IDiamond from '../../assets/icons/diamond.ico';
import ICup from '../../assets/icons/cup.ico';
const HomeScreen = ({ navigation, tabNavigation }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Lịch học</Text>
      <View style={styles.calenderContent}>
        <LesssionSubject />
      </View>

      <Text style={styles.titleWorkSpace}>Workspace của bạn</Text>

      <View style={styles.workspaceContent}>
        <TouchableOpacity
          style={styles.workSpace}
          onPress={() => navigation.push('Schedule')}
        >
          <ICalender />
          <Text style={styles.workSpaceTitle}>Thời khóa biểu</Text>
          <Text style={styles.workSpaceDescription}>Xem lịch học</Text>
        </TouchableOpacity>

        <View style={styles.workSpace}>
          <IPen />
          <Text style={styles.workSpaceTitle}>Lịch thi</Text>
          <Text style={styles.workSpaceDescription}>Xem lịch thi</Text>
        </View>
        <View style={styles.workSpace}>
          <ICup />
          <Text style={styles.workSpaceTitle}>Điểm số</Text>
          <Text style={styles.workSpaceDescription}>Xem điểm</Text>
        </View>

        <View style={styles.workSpace}>
          <IDiamond />
          <Text style={styles.workSpaceTitle}>Học phí</Text>
          <Text style={styles.workSpaceDescription}>Xem lịch học</Text>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  workSpaceTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
  },
  workSpaceDescription: {
    color: '#BDBDBD',
  },
  workspaceContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  workSpace: {
    flexDirection: 'column',
    width: '43%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    margin: '3%',
  },
  root: {
    flex: 1,
    padding: 10,
    // marginTop: 10,
    // height: '100%',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    marginLeft: 10,
  },
  calenderContent: {
    maxHeight: 300,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderBottomWidth: 3,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 10,
  },
  titleWorkSpace: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
});
