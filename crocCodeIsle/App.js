import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Croc Code Isle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkslateblue'
  },
  text: {
    fontSize: 33,
    color: 'lime'
  }
});

export default App;