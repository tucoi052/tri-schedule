import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import INotification from '../../assets/icons/notification.ico';
import AppContext from '../../peregrine/store/context/appContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HeaderTitle(props) {
  const { state, dispatch } = useContext(AppContext);
  return (
    <View style={styles.root}>
      <View style={styles.accountInfo}>
        {props.scene.route.name === 'HomeScreen' ? (
          <>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://i.imgur.com/cSLzQRS.jpg',
              }}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{state.user.displayName}</Text>
              <Text style={styles.gpa}>{state.user.email}</Text>
            </View>
          </>
        ) : null}
      </View>
      <View style={styles.notification}>
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.clear().then(() => {
              dispatch({
                type: 'SIGN_OUT',
              });
            });
          }}
        >
          <INotification />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HeaderTitle;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    width: '100%',
    height: 80,
    // marginTop: 30,
    paddingTop: 50,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 50,
    flexDirection: 'row',
    color: 'red',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    // padding: 20,
  },
  accountInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  info: {
    marginTop: 0,
    marginLeft: 10,
    height: 45,
  },
  gpa: {
    fontSize: 10,
    color: '#828282',
    lineHeight: 10,
    marginTop: 5,
  },
});
