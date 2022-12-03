import React from 'react';
import { View, TextInput } from 'react-native';
import Style from '../styles/Style';


const NameEntry = () => {
  return (
    <View style={Style.field}>
        <TextInput style={Style.input} placeholder="Your Name..." />
    </View>
  );
};

export default NameEntry;