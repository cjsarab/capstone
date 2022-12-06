import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Style from '../styles/Style';


const Question = () => {

    return (
        <SafeAreaView style={Style.field}>
            <Text>
                I'm a Question
            </Text>
        </SafeAreaView>
    );
};

export default Question;