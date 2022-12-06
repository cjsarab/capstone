import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {View, Text} from 'react-native';
import NameEntry from '../components/setup/NameEntry';
import Logo from '../components/logo/Logo';
import Style from '../components/styles/Style';
import LanguageSelector from '../components/setup/LanguageSelector';
import NavBar from '../components/navbar/NavBar';
import IslandContainer from '../components/islandcontainer/IslandContainer';

const MainContainer = () => {

  const [name, setName] = useState ("")
  const [language, setLanguage] = useState ("")
  const[selectedIsland, setSelectedIsland] = useState(null)

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

  if (name == "") {
  return (
    <View style={Style.mainContainerView}>
      <Logo />
      <NameEntry addName={addName}/>
      <Text> State: {name} </Text>
    </View>
    );
  }

  else if (name != "" && language == "") {
    return (
      <View style={Style.mainContainerView}>
        <Logo />
        <LanguageSelector chooseLanguage={chooseLanguage} />
        <Text> States: name = {name}. language = {language}</Text>
      </View>
    );
  }

  else if (name !== "" && language !== "") {

    return (

      <View style={Style.mainContainerView}>
        
              <Text style={Style.text}>We're not ready for this area. Homepage</Text>
              <NavBar/>
              <IslandContainer selectIsland={selectIsland}/>
              <Text>selectedIsland = {selectedIsland} States: name = {name}. language = {language}.</Text>
      </View>
    )
  }
};

export default MainContainer;