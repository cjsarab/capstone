import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Style from '../styles/Style';
import LanguageChoiceButton from './LanguageChoiceButton';
import LevelBar from './LevelBar';
import ScoresButton from './ScoresButton';


const NavBar = ({language, chooseLanguage, assignViewScoreTo, selectIsland}) => {

    return (
        <SafeAreaView style={Style.navBar}>
            <LanguageChoiceButton language={language} chooseLanguage={chooseLanguage} selectIsland={selectIsland}/>
            <LevelBar/>
            <ScoresButton assignViewScoreTo={assignViewScoreTo}/>
        </SafeAreaView>
    );
};

export default NavBar;