import React from 'react';
import {View, Text, Pressable, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Style from '../styles/Style';

const UserLevelUpPage = ({userTotalExperience, userLevel, assignLevelUpButtonPressed}) => {

    const onPress = () => {
        assignLevelUpButtonPressed(false)
    }


  return (
    <SafeAreaView>

        <ScrollView>
            <Text>
                Experience: {userTotalExperience}
            </Text>
            <Text>
                Level: {userLevel}
            </Text>
        </ScrollView>

        <Pressable style={styles.backButton} onPress={(event)=>onPress()}>
            <Text style={Style.text}>Back</Text>
        </Pressable>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    userOutput: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 10,
        paddingTop: 120
    },
  
    backButton: {
      marginTop: '15%',
      marginLeft: '39%',
      marginRight: '39%',
      backgroundColor: '#f4e4f4',
      width: 80,
      height: 80,
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      }
  });

export default UserLevelUpPage