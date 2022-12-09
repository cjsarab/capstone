import React from 'react';
import {View, Text, Pressable, StyleSheet } from 'react-native';
import Style from '../styles/Style';


const LevelBar = ({userTotalExperience, levelUpButtonPressed, assignLevelUpButtonPressed}) => {

    const onPress = () => {
        assignLevelUpButtonPressed(true)
    };

    return (
        <View>
            <Pressable style={styles.levelUpButton} 
            onPress={(event)=>onPress()}>
                <Text style={Style.text}>User total experience = {userTotalExperience}</Text>
            </Pressable>
        </View>
    );
};


const styles = StyleSheet.create ({

    levelUpButton: {
        backgroundColor: '#f4e4f4',
        width: 180,
        height: 80,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10,
        marginRight:10
    }
})

export default LevelBar;