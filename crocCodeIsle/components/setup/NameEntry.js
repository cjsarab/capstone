import React from 'react';
import { View, TextInput } from 'react-native';
import Style from '../styles/Style';
import UserService from '../services/UserService';


const NameEntry = ({addName}) => {

  const submitName = (name) => {
    addName(name)

    var points = 0;
    const user = {
      name,
      points
    }
    
    UserService.addUser(user)
  };

  return (
    <View style={Style.field}>
        <TextInput 
          style={Style.input}
          autoCorrect={false}
          onSubmitEditing={(event) => submitName(event.nativeEvent.text)}
          placeholder="Your Name..." />
    </View>
  );
};

export default NameEntry;