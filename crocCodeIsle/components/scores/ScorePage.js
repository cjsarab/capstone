import React, { useEffect } from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Style from '../styles/Style';
import UserService from '../services/UserService';

const ScorePage = ({topFiveUsers, assignViewScoreTo, assignTopFiveUsers}) => {

  const onPress = () => {
      assignViewScoreTo(false)
  };

  // const users = UserService.getUsers()
  // console.log("in ScorePage, users - ")
  // console.log(users)

  // assignTopFiveUsers(UserService.getTop5Users())
  // var topFiveUsersMadeInScorePage = UserService.getTop5Users()

  // console.log("")
  // console.log("Top5USERS XXXX - ");
  // console.log(topFiveUsers);
  // console.log("")

  // console.log("Top5USERS with the underscore Z - ");
  // console.log(topFiveUsers['_z']);

  // console.log("")
  // console.log("Top5USERS with the underscore Z and 0 - ");
  // console.log(topFiveUsers['_z'][0]);
  // console.log("")

  const topFiveUsersToOutput = 
        topFiveUsers['_z'][0]['name'] + ": " + topFiveUsers['_z'][0]['points'] + "\n" +
        topFiveUsers['_z'][1]['name'] + ": " + topFiveUsers['_z'][1]['points'] + "\n" +
        topFiveUsers['_z'][2]['name'] + ": " + topFiveUsers['_z'][2]['points'] + "\n" +
        topFiveUsers['_z'][3]['name'] + ": " + topFiveUsers['_z'][3]['points'] + "\n" +
        topFiveUsers['_z'][4]['name'] + ": " + topFiveUsers['_z'][4]['points'] 
  // const islandQuestionItems = islandQuestionsToMap.map((questionData, index) => {

  return (
    <View>
        <Text style={styles.userOutput} >
          {topFiveUsersToOutput}
        </Text>
        <Pressable style={styles.moveOnButton} onPress={(event)=>onPress()}>
            <Text style={Style.text}>back</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

  userOutput: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      padding: 10,
      paddingTop: 120
  },

  moveOnButton: {
    marginTop: '15%',
    marginLeft: '39%',
    marginRight: '39%',
    backgroundColor: '#f4e4f4',
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    }
});

export default ScorePage;