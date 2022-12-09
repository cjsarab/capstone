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
                <Text>
                    CORRECT!!!!
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
                <Text>

                    INCORRECCTTT!!!!
                </Text>
                <Text>
                    The correct response was : {textOfCorrectResponse}. 
                </Text>
                <Text>
                    you chose : {textOfAnswerPicked}
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



}

const styles = StyleSheet.create({

    moveOnButton: {
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


})

export default FinishedBox;