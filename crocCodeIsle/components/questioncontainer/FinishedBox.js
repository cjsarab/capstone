import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import Style from '../styles/Style';
import SuperCroc from '../assets/superCroc.png';
import DetectiveCroc from '../assets/detectiveCroc.png';

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
            <View style={styles.container}>
                <Text style={Style.text}>
                    Well Done, 
                </Text>
                <Text style={Style.text}> 
                    that was correct!
                </Text>
                <Image style={styles.crocImage} source = {SuperCroc} />
                <Pressable
                    style={styles.moveOnButton}
                    onPress={(event) => onPress()}>
                        <Text style={Style.text}>
                            Move on!
                        </Text>
                </Pressable>
            </View>
        )
    }
    else{
        return (
            <View style={styles.container}>
                <Text style={Style.text}>
                    Unfortunately that was not correct, 
                </Text>
                
                <Text style={Style.text}>
                    The correct response was " {textOfCorrectResponse} "
                </Text>
                <Text style={Style.text}>
                    you chose " {textOfAnswerPicked} "
                </Text>
                <Image style={styles.crocImage} source = {DetectiveCroc} />

                
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

    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },

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
        },

        crocImage: {
            height: 240,
            width: 240,
            resizeMode: 'contain',
            marginTop: 20
        }

})

export default FinishedBox;