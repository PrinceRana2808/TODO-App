import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { insertUser } from '../../services/database/database';
import { createTable } from '../../services/database/database';
import Loginbtn from '../../components/buttons/Loginbtn'
import  Registrationbtn  from '../../components/buttons/Registrationbtn';
import Appname from '../../components/Appname';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    createTable();
  }, []);

  const handleRegister = () => {
    if (username && password) {
      insertUser(username, password, (success) => {
        if (success) {
          Alert.alert('Success', 'User registered successfully');
          navigation.navigate('Login');
        } else {
          Alert.alert('Error', 'Failed to register user');
        }
      });
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Appname></Appname>
      <Text style={styles.title}>Create your account</Text>
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
        <Registrationbtn onPress={handleRegister}/>
      </View>
      <View style={styles.buttonContainer}>
        <Loginbtn onPress={()=>navigation.navigate('Login')}/>
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

export default RegistrationScreen;