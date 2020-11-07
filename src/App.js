// import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Home from './home';
// import { NavigationContainer } from '@react-navigation/native';

class App extends React.Component {
  render() {
    return (
      // <NavigationContainer>
        <View style={styles.appContainer}>
        
          <Home style={styles.homeContainer}/>
        </View>
      // </NavigationContainer>
      
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",

    
    // position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0
  },
  homeContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  }
});

AppRegistry.registerComponent('App', () => App);

export default App;