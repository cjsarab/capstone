import React from 'react';
import {Text, SafeAreaView, Pressable} from 'react-native';
import Style from '../styles/Style';


const Question = ({islandQuestions, currentQuestion, assignCurrentQuestion}) => {

    console.log("currentQuestion");
    console.log(currentQuestion);

    const onPress = (response) => {
        if(response == correctResponse)
        {
            console.log("correct response")
        }
        else
        {
            console.log("incorrect response")
        }
        
        // need to add here message to show correct or incorrect answer
        if(currentQuestion<3)
        {
            assignCurrentQuestion(currentQuestion+1);
        }
        else
        {
            assignCurrentQuestion(1);
        }

    }

    console.log("islandQuestions");
    console.log(islandQuestions);

    const questionToShow = islandQuestions[currentQuestion];
    



    const islandQuestionsToMap = Object.entries(islandQuestions)
    const islandQuestionItems= islandQuestionsToMap.map((questionData, index) => {
        console.log("_____")
        console.log(currentQuestion)
        console.log("Should equal")
        console.log(questionData[1]['question_position']);
        console.log("_____")

        if(currentQuestion == questionData[1]['question_position'])
        {
            
            return(
                questionData[1]
            )
        }
    });
    

    console.log("islandQuestionItems");
    console.log(islandQuestionItems);

    // We have small concerns with this current question-1 solution
    // the data is coming back [data we want, undefined, undefined]
    // then [undefined, data we want, undefined]......

    var questionText = islandQuestionItems[currentQuestion-1]['question_text']
    var response1 = islandQuestionItems[currentQuestion-1]['response1']
    var response2 = islandQuestionItems[currentQuestion-1]['response2']
    var response3 = islandQuestionItems[currentQuestion-1]['response3']
    var response4 = islandQuestionItems[currentQuestion-1]['response4']
    var correctResponse = islandQuestionItems[currentQuestion-1]['correct_response']



    return (
        <SafeAreaView style={Style.field}>
            <Text>
                { questionText }
            </Text>
            <Pressable onPress={(event) => onPress(response1) }><Text>{response1}</Text></Pressable>
            <Pressable onPress={(event) => onPress(response2) } ><Text>{response2}</Text></Pressable>
            <Pressable onPress={(event) => onPress(response3) }><Text>{response3}</Text></Pressable>
            <Pressable onPress={(event) => onPress(response4) }><Text>{response4}</Text></Pressable>
        </SafeAreaView>
    );
};

export default Question;