import React from 'react';
import {ScrollView} from 'react-native';
import Style from '../styles/Style';
import Island from './Island';


const IslandContainer = ({islands, language, selectIsland, assignCurrentQuestion}) => {

    const islandToMap = Object.entries(islands)
    const islandItems= islandToMap.map((islandData, index) => {
        
        if (language == islandData[1]['language']) {

            return (
                <Island 
                    islandData={islandData} 
                    key={index} 
                
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