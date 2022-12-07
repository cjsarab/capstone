import React from 'react';
import {View, Text, StyleSheet, Pressable } from 'react-native';
import Style from '../styles/Style';


const Island = ({islandData, selectIsland, assignCurrentQuestion}) => {

  const onPress = (id) => {
    console.log(id)
    selectIsland(id)
    assignCurrentQuestion(1)
  };

  const id = islandData[1]['id'];
  
  

  return (
    <View>
      <Pressable style={({ pressed }) => pressed ? [styles.islandButton, styles.pressed] : styles.islandButton } 
          onPress={(event) => onPress(id)}>
      <Text style={Style.text}>Island</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

    islandButton: {
      backgroundColor: '#f18930',
      height: 120,
      width: 120,
      padding: 20,
      margin: 20,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: 'black',
      textAlign: 'center',
      justifyContent: 'center',
    },
  
    pressed: {
      backgroundColor: '#ffdb0d'
    }
  
  })

export default Island;
