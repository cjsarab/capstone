import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Style from '../styles/Style';


const Question = ({islandQuestions, currentQuestion, assignCurrentQuestion}) => {

    console.log("islandQuestions");
    console.log(islandQuestions);

    const questionToShow = islandQuestions[currentQuestion];
    console.log("questionToShow");
    console.log(questionToShow);



    const islandQuestionsToMap = Object.entries(islandQuestions)
    const islandQuestionItems= islandQuestionsToMap.map((questionData, index) => {
        
        if(currentQuestion == questionData[1]['question_position'])
        {
            
            return(
                questionData[1]['question_text']
            )
        }
    });



    // const id = islandData[1]['questions']
    return (
        <SafeAreaView style={Style.field}>
            <Text>
                {islandQuestionItems}
            </Text>
        </SafeAreaView>
    );
};

export default Question;