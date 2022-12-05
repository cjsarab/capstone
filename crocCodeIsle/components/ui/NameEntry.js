import React from 'react';
import { View, TextInput } from 'react-native';
import Style from '../styles/Style';


const NameEntry = ({name, setName, addName}) => {

  const submitName = (text) => {
    addName(text)
  }



  return (
    <View style={Style.field}>
        <TextInput 
        style={Style.input}
        onSubmitEditing={(event) => submitName(event.nativeEvent.text)}
        placeholder="Your Name..." />
    </View>
  );
};

export default NameEntry;