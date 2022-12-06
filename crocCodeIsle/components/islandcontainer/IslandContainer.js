import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import Style from '../styles/Style';
import Island from './Island';

const IslandContainer = ({selectIsland, assignCurrentQuestion}) => {
    const island1 = 1
    const island2 = 2
    const island3 = 3
    return (
        <ScrollView>
            <Island selectIsland={selectIsland} island_id={island1} assignCurrentQuestion={assignCurrentQuestion} />
            <Island selectIsland={selectIsland} island_id={island2} assignCurrentQuestion={assignCurrentQuestion}/>
            <Island selectIsland={selectIsland} island_id={island3} assignCurrentQuestion={assignCurrentQuestion}/>
        </ScrollView>

    )
}

export default IslandContainer;