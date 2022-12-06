import React from 'react';
import {View, Text, StyleSheet, Pressable } from 'react-native';
import Style from '../styles/Style';



const Island = ({selectIsland, island_id, assignCurrentQuestion}) => {


        const onPress = (id)=>{
            console.log(id)
            selectIsland(id)
            assignCurrentQuestion(1)
        };

    return (
        <View>
      <Pressable style={({ pressed }) => pressed ? [styles.languageChoiceButton, styles.pressed] : styles.languageChoiceButton } 
          onPress={(event) => onPress(island_id)}>
        <Text style={Style.text}>Island</Text>
      </Pressable>
        </View>

    )
}

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

export default Island;