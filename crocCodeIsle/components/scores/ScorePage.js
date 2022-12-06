import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Style from '../styles/Style';


const ScorePage = ({assignViewScoreTo}) => {

    const onPress = () => {
        assignViewScoreTo(false)
    };

  return (
    <View>
        <Pressable style={Style.navBarButton} onPress={(event)=>onPress()}>
            <Text style={Style.text}>Click me to go back</Text>
        </Pressable>
    </View>
  );
};

export default ScorePage;