import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Style from '../styles/Style';

const FinishedBox = ({
    assignIsQuestionAnswered,
    currentQuestion, 
    assignCurrentQuestion, 
    selectIsland,
    textOfCorrectResponse,
    textOfAnswerPicked

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

    if(textOfCorrectResponse==textOfAnswerPicked){
        return (
            <View>
                <Text style={Style.text}>
                    Well Done, 
                </Text>
                <Text style={Style.text}> 
                    that was correct!
                </Text>
                <Pressable
                    style={styles.moveOnButton}
                    onPress={(event) => onPress()}>
                        <Text style={Style.text}>
                            move on!
                        </Text>
                </Pressable>
            </View>
        )
    }
    else{
        return (
            <View>
                <Text style={Style.text}>
                    Unfortunately that was not correct, 
                </Text>
                
                <Text style={Style.text}>
                    The correct response was " {textOfCorrectResponse} "
                </Text>
                <Text style={Style.text}>
                    you chose " {textOfAnswerPicked} "
                </Text>
                
                    <Pressable
                        style={styles.moveOnButton}
                        onPress={(event) => onPress()}>

                            <Text style={Style.text}>
                                Continue
                            </Text>
                    </Pressable>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({

    moveOnButton: {
        marginTop: '15%',
        marginLeft: '39%',
        marginRight: '39%',
        backgroundColor: '#f4e4f4',
        width: 90,
        height: 80,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        }

})

export default FinishedBox;