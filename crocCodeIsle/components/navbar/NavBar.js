import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Style from '../styles/Style';
import LanguageChoiceButton from './LanguageChoiceButton';
import LevelBar from './LevelBar';
import ScoresButton from './ScoresButton';


const NavBar = ({language, chooseLanguage, assignViewScoreTo}) => {

    return (
        <SafeAreaView style={Style.navBar}>
            <LanguageChoiceButton language={language} chooseLanguage={chooseLanguage}/>
            <LevelBar/>
            <ScoresButton assignViewScoreTo={assignViewScoreTo}/>
        </SafeAreaView>
    );
};

export default NavBar;