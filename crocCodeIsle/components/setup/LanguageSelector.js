import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Style from '../styles/Style';


const LanguageSelector = ({chooseLanguage}) => {

  const onPress = (text) => {
    chooseLanguage(text)
  };

  const python = "Python"
  const javascript = "Javascript";
  const java = "Java";

  return (
    <View style={Style.field}>

      <Pressable style={({ pressed }) => pressed ? [styles.languageChoiceButton, styles.pressed] : styles.languageChoiceButton } 
          onPress={(event) => onPress(python)}>
          <Text style={Style.text}>Python</Text>

      </Pressable>

      <Pressable style={({ pressed }) => pressed ? [styles.languageChoiceButton, styles.pressed] : styles.languageChoiceButton } 
          onPress={(event) => onPress(javascript)}>
        <Text style={Style.text}>JavaScript</Text>
      </Pressable>

      <Pressable style={({ pressed }) => pressed ? [styles.languageChoiceButton, styles.pressed] : styles.languageChoiceButton } 
          onPress={(event) => onPress(java)}>
        <Text style={Style.text}>Java</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({

  languageChoiceButton: {
    backgroundColor: 'green',
    width: 333,
    padding: 20,
    margin: 20,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'black',
    textAlign: 'center'
  },

  pressed: {
    backgroundColor: 'lime'
  }

})

export default LanguageSelector;