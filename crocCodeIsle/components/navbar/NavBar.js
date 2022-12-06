import React from 'react';
import {View, Text} from 'react-native';
import Style from '../styles/Style';
import LanguageChoiceButton from './LanguageChoiceButton';
import LevelBar from './LevelBar';
import ScoresButton from './ScoresButton';

const NavBar = () => {

    return (
        <View style={Style.field}>
            <Text>hello</Text>
            <LanguageChoiceButton/>
            <LevelBar/>
            <ScoresButton/>
        </View>
    )

}

export default NavBar;