import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import Style from '../styles/Style';
import trophy from '../assets/Trophy.png';


const ScoresButton = ({assignViewScoreTo})=>{

const onPress = () => {
    assignViewScoreTo(true)
};

    return (
        <View>
            <Pressable style={Style.navBarButton} onPress={(event)=>onPress()}>
                <Image style={Style.languageLogo} source = {trophy} />
            </Pressable>
        </View>
    );
};

export default ScoresButton;