import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Style from '../styles/Style';

const FinishedBox = ({
    assignIsQuestionAnswered,
    currentQuestion, 
    assignCurrentQuestion, 
    selectIsland
}) => {

    const onPress = () => {
        if (currentQuestion < 3) {
            assignCurrentQuestion(currentQuestion + 1)
        } else {
            assignCurrentQuestion(1)

            selectIsland(null)
            // to-do: unlock the next island
        };
        assignIsQuestionAnswered(false)
    }


    return (
        <View>
            <Pressable
                onPress={(event) => onPress()}>
                    <Text style={Style.text}>
                        move on!
                    </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({



})

export default FinishedBox;