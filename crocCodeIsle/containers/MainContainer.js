import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {View, Text, SafeAreaView, ActivityIndicator, StatusBar, Animated, StyleSheet} from 'react-native';
import NameEntry from '../components/setup/NameEntry';
import Logo from '../components/logo/Logo';
import Style from '../components/styles/Style';
import LanguageSelector from '../components/setup/LanguageSelector';
import NavBar from '../components/navbar/NavBar';
import IslandContainer from '../components/islandcontainer/IslandContainer';
import QuestionContainer from '../components/questioncontainer/QuestionContainer';
import ScorePage from '../components/scores/ScorePage';
import Island from '../components/islandcontainer/Island';

const MainContainer = () => {

  const [name, setName] = useState ("");
  const [language, setLanguage] = useState ("");
  const [selectedIsland, setSelectedIsland] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [viewScore, setViewScore] = useState(false);

  const [islands, setIslands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [answerPicked, setAnswerPicked] = useState(null)


  useEffect(() => {
    getIslands();
  }, []);

  const getIslands = function(){
    fetch("http://localhost:8080/questionislands/")
    .then(res => res.json())
    .then((data) => {  setIslands(data); setIsLoading(false); }
    )
  };

  function addName(name) {
    console.log("State (name) = " + name)
    tempName = setName(name)
  };

  function chooseLanguage(language) {
    console.log("State (language) = " + language)
    tempLanguage = setLanguage(language)
  };

  function selectIsland(island_id) {
    console.log("State (selectedIsland) = " + island_id)
    tempIsland = setSelectedIsland(island_id)
  };

  function assignCurrentQuestion(question_id) {
    console.log("State (currentQuestion) = " + question_id)
    tempCurrentQuestion = setCurrentQuestion(question_id)
  };

  function assignViewScoreTo(bool) {
    console.log("State (viewScore) = " + bool)
    tempViewScore = setViewScore(bool)
  };

  function assignIsQuestionAnswered(bool){
    console.log("State (isQuestionAnswered) = " + isQuestionAnswered)
    tempIsQuestionAnswered = setIsQuestionAnswered(bool)
  }

  function assignAnswerPicked(answer) {
    console.log("State (answerPicked) = " + answerPicked)
    tempAnswerPicked = setAnswerPicked(answer)
  }
  
  if (isLoading) {
    console.log("isLoading = true. App is most likely fetching data.");
    return(
      <SafeAreaView style={Style.progressField}>
        <Text style={Style.text}>Loading...</Text>
          <View style={Style.progressBar}>
            <Animated.View style={{ ...StyleSheet.absoluteFill, backgroundColor: 'lime', width: '50%' }} />
          </View>
        <Text style={Style.text}>50%</Text>
      </SafeAreaView>
    );
  }

  else if (name == "") {
    
    return (
      <SafeAreaView style={Style.mainContainerView}>
        <Logo />
        <NameEntry addName={addName}/>
        <Text> State: {name} </Text>
      </SafeAreaView>
    );
  }

  else if (name != "" && language == "") {

    return (
      <SafeAreaView style={Style.mainContainerView}>
        <Logo />
        <LanguageSelector chooseLanguage={chooseLanguage} />
        <Text> States: name = {name}. language = {language}</Text>
      </SafeAreaView>
    );
  }

  else if(name !== "" && language !== "" && viewScore == true) {

    return (
      <SafeAreaView style={Style.mainContainerView}>
        <ScorePage assignViewScoreTo={assignViewScoreTo} />
      </SafeAreaView>
    );
  }

  else if (name !== "" && language !== "" && selectedIsland == null) {

    return (
      <SafeAreaView style={Style.mainContainerView}>

        <NavBar 
          style={Style.navBarContainer}

          language={language} 
          chooseLanguage={chooseLanguage} 
          assignViewScoreTo={assignViewScoreTo} 
          selectIsland={selectIsland}/>

        <IslandContainer
          islands={islands}
          language={language} 
          selectIsland={selectIsland} 
          assignCurrentQuestion={assignCurrentQuestion}/>

        <Text>States: name = {name}. language = {language}.</Text>
      </SafeAreaView>
    );
  }

  else if (name !== "" && language !== "" && selectedIsland !== null) {

    return (
      <SafeAreaView style={Style.mainContainerView}>  

        <NavBar
          style={Style.navBarContainer}

          language={language}
          chooseLanguage={chooseLanguage}
          assignViewScoreTo={assignViewScoreTo} 
          selectIsland={selectIsland}/>

        <QuestionContainer 
          islands={islands} 
          selectedIsland={selectedIsland} 
          currentQuestion={currentQuestion}
          isQuestionAnswered={isQuestionAnswered} 
          answerPicked={answerPicked}
          assignCurrentQuestion={assignCurrentQuestion}
          selectIsland={selectIsland}
          assignIsQuestionAnswered={assignIsQuestionAnswered}
          assignAnswerPicked={assignAnswerPicked}
          />

        <Text> selectedIsland = {selectedIsland}</Text>

      </SafeAreaView>
    );
  };

};

export default MainContainer;