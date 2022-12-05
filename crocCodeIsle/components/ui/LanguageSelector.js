import React from 'react';
import { View, Button, Text, Pressable } from 'react-native';
import Style from '../styles/Style';


const LanguageSelector = ({language, setLanguage, chooseLanguage}) => {

  const onPress = (text) => {
    console.log(text)

    chooseLanguage(text)
  }

  const python = "Python";
  const javascript = "Javascript";
  const java = "Java";

  return (
    <View style={Style.languageChoiceField}>
      <Pressable style={Style.languageChoiceButton} onPress={(event) => onPress(python)}>
        <Text>Python</Text>
      </Pressable>

      <Pressable style={Style.languageChoiceButton} onPress={(event) => onPress(javascript)}>
        <Text>JavaScript</Text>
      </Pressable>

      <Pressable style={Style.languageChoiceButton} onPress={(event) => onPress(java)}>
        <Text>Java</Text>
      </Pressable>


      {/* <Pressable style={Style.languageChoiceButton} onPress={selectLanguage(javascript)}>
        <Text>JavaScript</Text>
      </Pressable>
      <Pressable style={Style.languageChoiceButton} onPress={selectLanguage(java)}>
        <Text>Java</Text>
      </Pressable> */}
    </View>
  );
};

export default LanguageSelector;