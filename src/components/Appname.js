import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Appname=()=>{
    return (
        <View style={styles.container}>
          <Text style={styles.appname}>TODO LIST</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
      },
      appname: {
        fontSize: 48, // Larger font size for emphasis
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#6200ee', // Purple color
        textShadowColor: 'rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
      }
    }
)
 export default Appname;