import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Style from '../styles/Style';

const ScoresButton = ({assignViewScoreTo})=>{

const onPress = () => {
    assignViewScoreTo(true)
}

    return (
        <View>
<Pressable style={Style.navBarButton} onPress={(event)=>onPress()}>
    <Text style={Style.text}>view score</Text>
</Pressable>
        </View>

    )
}

export default ScoresButton;