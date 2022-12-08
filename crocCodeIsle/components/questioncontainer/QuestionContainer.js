import React from 'react';
import {View} from 'react-native';
import Style from '../styles/Style';
import Question from './Question';


const QuestionContainer = ({islands, selectedIsland, currentQuestion, isQuestionAnswered, assignCurrentQuestion, selectIsland, assignIsQuestionAnswered}) => {

    const questionsToMap = Object.entries(islands)
    const questionItems= questionsToMap.map((islandData, index) => {
        
        if (selectedIsland == islandData[1]['id']) {
            
            return (
                <Question 
                    islandQuestions={islandData[1]['questions']}
                    key={index} 

                    selectedIsland={selectedIsland}
                    currentQuestion={currentQuestion} 
                    isQuestionAnswered={isQuestionAnswered}
                    assignCurrentQuestion={assignCurrentQuestion}
                    selectIsland={selectIsland}
                    assignIsQuestionAnswered={assignIsQuestionAnswered} />
            )
        }
    });

    return (
        <View style={Style.questionContainer}>
            {questionItems}
        </View>
    );
};

export default QuestionContainer;