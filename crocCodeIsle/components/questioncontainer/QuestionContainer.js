import React from 'react';
import {View, Text} from 'react-native';
import Style from '../styles/Style';
import Question from './Question';


const QuestionContainer = ({selectedIsland, assignCurrentQuestion}) => {

    const question1 = 1;

    return (
        <View style={Style.questionContainer}>
            <Question selectedIsland={selectedIsland} question_id={question1} />
            <Text> I'm the Q container</Text>
        </View>
    );
};

export default QuestionContainer;