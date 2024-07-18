import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Choose an event listed, and Press Join whenever ready!');
    } catch (error: any) {
      console.log(error);
      alert('sign in failed:' + error.message);
    } finally {
      setLoading(false);
    }
  };



  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('check your email');
    } catch (error: any) {
      console.log(error);
      alert('sign in failed:' + error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={styles.container}>
      <Text>Welcome to Challenge Time!!</Text>
      <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput value={password} secureTextEntry={true} style={styles.input} placeholder='password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>

      {loading ? <ActivityIndicator size='large' color='#000ff' />
        : <>
          <View style={styles.spacing} />
          <Button title='login' onPress={() => signIn()} color="#800080" />
          <View style={styles.spacing} />
          <Button title='First time? Sign up' onPress={() => signUp()} color="#800080" />

        </>}

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 16,
    backgroundColor: '#fff'
  },
  spacing: {
    height: 8, // Adjust the height value to get the desired padding
  },
});