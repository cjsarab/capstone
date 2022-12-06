import React from 'react';
import {View, Text} from 'react-native';
import Style from '../styles/Style';
import Question from './Question';

const QuestionContainer = ({selectedIsland, assignCurrentQuestion}) => {
    const question1 = 1
    return (
        <View>
            <Question selectedIsland={selectedIsland} question_id={question1} />
        </View>

    )
}

export default QuestionContainer;