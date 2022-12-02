import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import NameEntry from '../components/ui/NameEntry';
import Logo from '../components/logo/Logo';
import Style from '../components/styles/Style';

const MainContainer = () => {
  return (

    <View style={Style.mainContainerView}>
        <Logo />
        <NameEntry />
    </View>

  );
};

export default MainContainer;