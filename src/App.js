
import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.appContainer}>
          <Home style={styles.homeContainer}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  homeContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  }
});

AppRegistry.registerComponent('App', () => App);

export default App;