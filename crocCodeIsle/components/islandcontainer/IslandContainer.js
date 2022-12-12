import React from 'react';
import {ScrollView} from 'react-native';
import Style from '../styles/Style';
import Island from './Island';


const IslandContainer = ({islands, language, selectIsland, assignCurrentQuestion}) => {

    const islandToMap = Object.entries(islands)
    const islandItems= islandToMap.map((islandData, index) => {
        
        if (language == islandData[1]['language']) {
            var align;
            if(index%3 == 0){ align="left"; } 
            else if(index%3 == 1){ align="right"; } 
            else if(index%3 == 2){ align="center"; } 

            console.log("align : " + align);

            return (
                <Island 
                    islandData={islandData} 
                    key={index} 
                    align={align}

                    selectIsland={selectIsland} 
                    assignCurrentQuestion={assignCurrentQuestion} />  
            )
        }
    });

    return (
        <ScrollView style={Style.islandContainer}>
            {islandItems}
        </ScrollView>
    );
};

export default IslandContainer;