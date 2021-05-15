import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import useUser from '../../peregrine/talons/App/useUser';
export default function LoginScreen() {
  const { handleLogin, isLoading, isSplash, error } = useUser();
  const [username, setUsername] = useState('1951061068');
  const [password, setPassword] = useState('Kendlytri1');

  return (
    <View style={styles.root}>
      <Image
        style={styles.topLogo}
        source={require('../../../assets/logo.png')}
      />

      <SafeAreaView>
        <Text style={styles.error}>{error}</Text>

        <View style={styles.textInput}>
          <Text style={styles.label}>Mã sinh viên </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setUsername(text);
            }}
            paddingLeft={12}
            value={username}
          />
        </View>

        <View style={styles.textInput}>
          <Text style={styles.label}>Mật khẩu </Text>
          <TextInput
            autoCompleteType={'password'}
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(text) => {
              setPassword(text);
            }}
            paddingLeft={12}
            value={password}
          />
        </View>
      </SafeAreaView>

      <TouchableOpacity
        style={styles.login}
        onPress={() => {
          handleLogin(username, password);
        }}
      >
        <Text style={styles.textLogin}>
          {isLoading ? 'Loading...' : 'Đăng nhập'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.noti}>Ứng dụng chỉ hỗ trợ K61 trở đi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 200,
    padding: 30,
  },
  textInput: {
    marginTop: 20,
  },
  label: {
    color: '#8E8E93',
    fontSize: 13,
    marginBottom: 10,
  },
  input: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderColor: '#18A64A',
    borderRadius: 6,
  },
  login: {
    marginTop: 20,
    height: 45,
    backgroundColor: '#18A64A',
    borderRadius: 6,
  },
  textLogin: {
    textAlign: 'center',
    fontSize: 14,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: 15,
  },
  error: {
    color: '#F2994A',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  noti: {
    fontSize: 14,
    color: '#18A64A',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  topLogo: {
    height: 50,
    width: 100,
    alignSelf: 'center',
  },
});
