import React, { useEffect } from 'react';
import {View, Text, Pressable} from 'react-native';
import Style from '../styles/Style';
import UserService from '../services/UserService';


const ScorePage = ({topFiveUsers, assignViewScoreTo, assignTopFiveUsers}) => {

    const onPress = () => {
        assignViewScoreTo(false)
    };

    const users = UserService.getUsers()
    console.log(users)

    useEffect(() => {
      UserService.getTop5Users().then(topFiveFromDB => assignTopFiveUsers(topFiveFromDB))
    }, [])

  return (
    <View>
        <Pressable style={Style.navBarButton} onPress={(event)=>onPress()}>
            <Text style={Style.text}>Click me to go back</Text>
        </Pressable>
    </View>
  );
};

export default ScorePage;