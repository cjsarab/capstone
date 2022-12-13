import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Style from '../styles/Style';
import SnakeWatermark from '../assets/SnakeWatermark.png';

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
          <Text style={styles.text}>Python</Text>

      </Pressable>

      <Pressable style={({ pressed }) => pressed ? [styles.languageChoiceButton, styles.pressed] : styles.languageChoiceButton } 
          onPress={(event) => onPress(javascript)}>
        <Text style={styles.text}>JavaScript</Text>
      </Pressable>

      <Pressable style={({ pressed }) => pressed ? [styles.languageChoiceButton, styles.pressed] : styles.languageChoiceButton } 
          onPress={(event) => onPress(java)}>
        <Text style={styles.text}>Java</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({

  languageChoiceButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDF50',
    width: 266,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    textAlign: 'center'
  },

  pressed: {
    backgroundColor: 'lime'
  },

  languageImageStyle: {
    height: 100,
    width: 100,

  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'futura',
  }

})

export default LanguageSelector;