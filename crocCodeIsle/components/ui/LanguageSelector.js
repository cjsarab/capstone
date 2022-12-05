import React from 'react';
import { View, Button, Text, Pressable } from 'react-native';
import Style from '../styles/Style';


const LanguageSelector = ({language, setLanguage, chooseLanguage}) => {

  const selectLanguage = (text) => {
    chooseLanguage(text)
  }

  const python = "Python";

  return (
    <View style={Style.field}>
        <Button 
                onPress={selectLanguage(python)}
                title="PythonTitle"
                
                colour="#841584"

                accessibilityLabel="Learn more about this purple button"
        />
        <Text> Hi, I'm language</Text>
    </View>
  );
};

export default LanguageSelector;