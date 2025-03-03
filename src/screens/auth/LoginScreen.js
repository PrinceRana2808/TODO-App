import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { getUser } from '../../services/database/database';
import Loginbtn from '../../components/buttons/Loginbtn'
import  Registrationbtn  from '../../components/buttons/Registrationbtn';
import Appname from '../../components/Appname';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      getUser(username, password, (success, userId) => {
        if (success) {
          Alert.alert('Success', 'Login successful');
          navigation.navigate('Home', { userId }); 
        } else {
          Alert.alert('Error', 'Invalid username or password');
        }
      });
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Appname></Appname>
      <Text style={styles.title}>Login to your account</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Loginbtn onPress={handleLogin}/>
      </View>
      <View style={styles.buttonContainer}>
         <Registrationbtn onPress={() => navigation.navigate('Register')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'orange',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6200ee', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color:'white',
    marginBottom: 15,
    padding: 10,
    fontSize: 18,
    backgroundColor: 'grey',
  },
  buttonContainer: {
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default LoginScreen;