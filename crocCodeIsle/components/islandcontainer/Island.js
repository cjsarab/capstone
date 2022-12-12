import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import Style from '../styles/Style';
import island from '../assets/island.png';

const Island = ({islandData, selectIsland, assignCurrentQuestion}) => {

  const onPress = (id) => {
    selectIsland(id)
    assignCurrentQuestion(1)
  };

  //In the above onPress function we need to 
  // assign the current question more correctly

  const id = islandData[1]['id'];
  const islandName = islandData[1]['name']
  //  duncan says - maybe we just pass the id down not the whole islandData

  return (
    <View>
      <Pressable style={({ pressed }) => pressed ? [styles.islandButton, styles.pressed] : styles.islandButton } 
          onPress={(event) => onPress(id)}>
      <Text style={Style.text}>
      <Image style={Style.TrophyLogoLarge} source = {island} />
      
      {islandName}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

    islandButton: {
      backgroundColor: '#3366ff',
      height: 220,
      width: 200,
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
