import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import Style from '../styles/Style';
import trophy from '../assets/Trophy.png';


const ScoresButton = ({assignViewScoreTo, assignTriggerReloadFromDB, assignIsLoading, assignIsLoadingAllUsers})=>{

const onPress = () => {

    assignIsLoadingAllUsers(true);
    assignIsLoading(true);
    assignTriggerReloadFromDB("data")

    assignViewScoreTo(true)

    // here we want to trigger the useEffect in MainContainer to reloa the 
    // scores so our highscores are up to date

    


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