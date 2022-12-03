import { StyleSheet } from 'react-native';

export default Style = StyleSheet.create({

    mainContainerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkslateblue'
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
        padding:20
    }
});