import React from 'react';
import { View, TextInput } from 'react-native';
import Style from '../styles/Style';
import UserService from '../services/UserService';

const NameEntry = ({allUsers, addName, addUserId, determineUserTotalExperience}) => {

  console.log("at start of NameEntry");
  console.log(allUsers);

  const submitName = (name) => {
    // addName sets the state "name"
    addName(name);

    // now we should see if a user of this name exists in the database.
    // If they do, we should get their points from the database, and put 
    // those points into state.
    // Otherwise we should add them to the database with 0 points
    console.log("here we have all the users from the database, we want ot check if our name is in there - ")
    console.log(allUsers);

    var index = allUsers.map(function(e) { return e.name; }).indexOf(name);
    console.log("index : " + index);

    if(index != -1) // if the current name is in the database
    {
      // get points from DB
      scoreFromDB = allUsers[index]['points'];
      console.log("scoreFromDB: ");
      console.log(scoreFromDB);
      // put those points into state
      determineUserTotalExperience(scoreFromDB);

    }
    else
    {
      var points = 0;
      const user = {
        name,
        points
      }

      // this adds the user to the database
      UserService.addUser(user)

    }
    // const userByName = UserService.getUserByName(name)
    // console.log('userbyname:')
    // console.log(userByName)
  };

  return (
    <View style={Style.field}>
        <TextInput 
          style={Style.input}
          autoCorrect={false}
          onSubmitEditing={(event) => submitName(event.nativeEvent.text)}
          placeholder="Your Name..." />
    </View>
  );
};

export default NameEntry;