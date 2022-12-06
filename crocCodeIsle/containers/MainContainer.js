import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import NameEntry from '../components/setup/NameEntry';
import Logo from '../components/logo/Logo';
import Style from '../components/styles/Style';
import LanguageSelector from '../components/setup/LanguageSelector';
import NavBar from '../components/navbar/NavBar';
import IslandContainer from '../components/islandcontainer/IslandContainer';
import QuestionContainer from '../components/questioncontainer/QuestionContainer';

const MainContainer = () => {

  const [name, setName] = useState ("")
  const [language, setLanguage] = useState ("")
  const[selectedIsland, setSelectedIsland] = useState(null)
  const[currentQuestion, setCurrentQuestion]= useState(null)

  function addName(name) {
    console.log(name)
    tempName = setName(name)
  };

  function chooseLanguage(language) {
    console.log(language)
    tempLanguage = setLanguage(language)
  };

  function selectIsland(island_id){
    console.log(island_id)
    tempIsland = setSelectedIsland(island_id)
  };

  function assignCurrentQuestion(question_id){
    console.log(question_id)
    tempCurrentQuestion = setCurrentQuestion(question_id)
  };

  if (name == "") {
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

  else if (name !== "" && language !== "" && selectedIsland == null) {

    return (

      <SafeAreaView style={Style.mainContainerView}>
        

              <NavBar style={Style.navBarContainer} language={language} chooseLanguage={chooseLanguage}/>
              <IslandContainer selectIsland={selectIsland} assignCurrentQuestion={assignCurrentQuestion}/>
              <Text>selectedIsland = {selectedIsland} States: name = {name}. language = {language}.</Text>
      </SafeAreaView>
    )
  }

  else if (name !== "" && language !== "" && selectedIsland !== null) {

    return (

      <SafeAreaView style={Style.mainContainerView}>
        
        <NavBar style={Style.navBarContainer} language={language} chooseLanguage={chooseLanguage}/>
              <Text style={Style.text}>this is the questions page</Text>
              <QuestionContainer selectedIsland={selectedIsland} assignCurrentQuestion={assignCurrentQuestion}/>
              <Text>currentQuestion={currentQuestion} selectedIsland = {selectedIsland} States: name = {name}. language = {language}.</Text>
      </SafeAreaView>
    )
  }


};

export default MainContainer;