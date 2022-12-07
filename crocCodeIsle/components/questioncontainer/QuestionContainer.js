import React from 'react';
import {View, Text} from 'react-native';
import Style from '../styles/Style';
import Question from './Question';


const QuestionContainer = ({islands, selectedIsland, currentQuestion, assignCurrentQuestion}) => {

    

    const questionsToMap = Object.entries(islands)
    const questionItems= questionsToMap.map((islandData, index) => {
        
        if(selectedIsland == islandData[1]['id'])
        {
            
            return(
                <Question islandQuestions={islandData[1]['questions']} currentQuestion={currentQuestion} key={index} assignCurrentQuestion={assignCurrentQuestion} />
            )
        }
    });


    const question1 = 1;

    return (
        <View style={Style.questionContainer}>
            {questionItems}
        </View>
    );
};

export default QuestionContainer;