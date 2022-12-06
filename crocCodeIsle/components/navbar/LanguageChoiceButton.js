import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Style from '../styles/Style';


const LanguageChoiceButton = ({language, chooseLanguage})=>{

    const onPress = ()=> {
        chooseLanguage("")
    }
    
    var image;
    if (language == 'Python'){
         image = 'P'
    }

    else if (language == 'Javascript'){
         image = 'JS'
    }

    if (language == 'Java'){
         image = 'J'
    }

    return (
        <View>
<Pressable style={Style.navBarButton} onPress={(event)=>onPress()}>
    <Text style={Style.text}>
        {image}
    </Text>
</Pressable>
        </View>

    )
}

export default LanguageChoiceButton;