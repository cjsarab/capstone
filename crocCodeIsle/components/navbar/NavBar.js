import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Style from '../styles/Style';
import LanguageChoiceButton from './LanguageChoiceButton';
import LevelBar from './LevelBar';
import ScoresButton from './ScoresButton';


const NavBar = ({
    language, 
    topFiveUsers,
    levelUpButtonPressed,
    chooseLanguage,
    userTotalExperience,

    assignViewScoreTo, 
    selectIsland, 
    assignTopFiveUsers,
    assignLevelUpButtonPressed
    
    }) => {

    return (
        <SafeAreaView style={Style.navBar}>

            <LanguageChoiceButton 
            language={language} 
            chooseLanguage={chooseLanguage}
             selectIsland={selectIsland}/>

            <LevelBar 
            userTotalExperience={userTotalExperience}
            levelUpButtonPressed={levelUpButtonPressed} 
            assignLevelUpButtonPressed={assignLevelUpButtonPressed}/>

            <ScoresButton assignViewScoreTo={assignViewScoreTo} />

        </SafeAreaView>
    );
};

export default NavBar;