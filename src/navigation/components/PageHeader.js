import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import IBack from '../../assets/icons/back.icon';
import { useNavigation } from '@react-navigation/native';

export const LeftContainer = ({ title, subTitle }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountInfo}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IBack />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.gpa}>{subTitle}</Text>
      </View>
    </View>
  );
};

export const RightContainer = ({ chirdren }) => {
  return (
    <View
      style={styles.icon}
      onPress={() => {
        console.log('handle actions');
      }}
    >
      {chirdren}
    </View>
  );
};

const styles = StyleSheet.create({
  accountInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  info: {
    marginTop: 3,
    marginLeft: 5,
    height: 45,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  gpa: {
    fontSize: 10,
    color: '#828282',
    lineHeight: 10,
    marginTop: 5,
  },
});
