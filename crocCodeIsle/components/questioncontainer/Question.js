import React from 'react';
import {Text, SafeAreaView, View, Pressable, StyleSheet} from 'react-native';
import Style from '../styles/Style';


const Question = ({islandQuestions, selectedIsland, currentQuestion, assignCurrentQuestion, selectIsland}) => {

    // console.log("currentQuestion");
    // console.log(currentQuestion);

    const onPress = (response) => {

        if (response == correctResponse) {

            console.log(response + "was the correct response")

        } else {

            console.log(response + "was the incorrect response")

        };
        // need to add here message to the user to show correct or incorrect answer


        if (currentQuestion < 3) {
            assignCurrentQuestion(currentQuestion + 1)
        } else {
            assignCurrentQuestion(1)

            selectIsland(selectedIsland + 1)
            //This now moves the user onto the second island, but we will want 
            //to display the island container first
        };
    };

    const questionToShow = islandQuestions[currentQuestion];
    
    const islandQuestionsToMap = Object.entries(islandQuestions)
    const islandQuestionItems = islandQuestionsToMap.map((questionData, index) => {

        console.log(currentQuestion + " should equal " + questionData[1]['question_position'])

        if(currentQuestion == questionData[1]['question_position']) {
            
            return (
                questionData[1]
            )
        };
    });

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
            <Text style={styles.questionTitle}>
                { questionText }
            </Text>

            <View style={styles.answerField}>
                <Pressable style={styles.answerButton}
                    onPress={(event) => onPress(response1)}>
                        <Text style={Style.text}>
                            {response1}
                        </Text>
                </Pressable>

                <Pressable style={styles.answerButton}
                    onPress={(event) => onPress(response2)}>
                        <Text style={Style.text}>
                            {response2}
                        </Text>
                </Pressable>

                <Pressable style={styles.answerButton}
                    onPress={(event) => onPress(response3)}>
                        <Text style={Style.text}>
                            {response3}
                        </Text>
                </Pressable>

                <Pressable style={styles.answerButton}
                    onPress={(event) => onPress(response4)}>
                        <Text style={Style.text}>
                            {response4}
                        </Text>
                </Pressable>
            </View>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    questionTitle: {
      textAlign: 'center',
      fontSize: 35,
      padding: 20,
    },

    answerField: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10
    },
  
    answerButton: {
      height: 180,
      width: 162,
      padding: 10,
      margin: 5,
      borderColor: 'black',
      borderWidth: 2,
      backgroundColor: 'peru',
      textAlign: 'center',
      justifyContent: 'center',
      textColor: 'black',
      fontSize: 30
    }
  
  })

export default Question;