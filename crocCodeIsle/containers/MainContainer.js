import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {View, Text} from 'react-native';
import NameEntry from '../components/ui/NameEntry';
import Logo from '../components/logo/Logo';
import Style from '../components/styles/Style';

const MainContainer = () => {

  const [name, setName] = useState ("")


  function addName(name) {
    console.log(name)
    tempName = setName(name);
  };


  return (

    <View style={Style.mainContainerView}>
        <Logo />
        <NameEntry name={name} setName={setName} addName={addName}/>
        <Text> State: {name} </Text>
    </View>

  );
};

export default MainContainer;