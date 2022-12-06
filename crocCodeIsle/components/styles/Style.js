import { StyleSheet } from 'react-native';


export default Style = StyleSheet.create({

    mainContainerView: {
        flex: 2,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkslateblue'
      },
    
    questionContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      marginTop: 150,
      backgroundColor: 'teal',
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10, 
    },

    islandContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      marginTop: 150,
      backgroundColor: '#006994',
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10,
    },
    
    logo: {
      fontSize: 33,
      color: 'lime'
    },

    input: {
        height: 50,
        width: 220,
        padding: 0,
        fontSize: 22,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 20,
        textAlign: 'center',
    },

    field: {
      padding: 20
    },

    text: {
      fontSize: 20,
      textAlign: 'center',
    },

    navBarContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },

    navBar: {
      flex: 3,
      flexDirection: 'row',
    },

    navBarButton: {
      backgroundColor: '#f4e4f4',
      width: 80,
      height: 80,
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },

    languageLogo: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
    },

});