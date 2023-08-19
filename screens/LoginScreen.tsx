import { StyleSheet, Text, View, ActivityIndicator, ToastAndroid } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [pass, setPass] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  function logicToHomeScreen(text: string): void {
    setPass(text);
    if (text.length == 4) {
      fetchData(text);
    }
  }
  const fetchData = async (text: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://light-gold-chipmunk.cyclic.app/users/login/${text}`);
      console.log(response.data);
      if (response.data.isValid) {
        navigation.navigate('Home',{data:response.data.data});
      }
    } catch (error) {
      ToastAndroid.show('Incorrect Passcode!', ToastAndroid.SHORT);
    }
    finally {
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.passLabel}>enter passcode</Text>
      <TextInput
        style={styles.input}
        value={pass}
        keyboardType='numeric'
        // onChangeText={text => setPass(text)}
        onChangeText={text => logicToHomeScreen(text)}
        placeholder="****"
        textAlign='center'
      />
      {isLoading ?
        <ActivityIndicator style={styles.loaderContainer} size="large" color="#33cccc" /> :
        <ActivityIndicator style={styles.hiddenLoaderContainer} size="large" color="#33cccc" />}
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: 200,
    height: 40,
    borderColor: '#33cccc',
    borderWidth: 1,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  loaderContainer: {
    marginTop: 10,
  },
  hiddenLoaderContainer: {
    marginTop: 10,
    opacity: 0
  },
})