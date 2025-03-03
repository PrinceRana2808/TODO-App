
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Registrationbtn = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Register</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red', // Blue background color
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 30, // Horizontal padding
    borderRadius: 25, // Rounded corners
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 2, // Shadow radius
    elevation: 5, // Elevation for Android
  },
  text: {
    color: '#FFFFFF', // White text color
    fontSize: 18, // Text size
    fontWeight: 'bold', // Bold text
  },
});

export default Registrationbtn;