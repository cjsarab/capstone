import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const MainContainer = () => {
  return (

    <View style={styles.view}>
      <Text style={styles.text}>Croc Code Isle</Text>
      <TouchableOpacity style={styles.field}>
        <TextInput style={styles.input} placeholder="Please Enter Your Name..." />
        <TextInput style={styles.input} placeholder="Please Enter Your Country..." />
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
    view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'darkslateblue'
    },
    text: {
      fontSize: 33,
      color: 'lime'
    },
    input: {
        height: 50,
        padding: 8,
        fontSize: 16,
        color: 'red',
        backgroundColor: 'white',
        borderRadius: 50
    },
    field: {
        padding: 12
    }
    
  });

export default MainContainer;