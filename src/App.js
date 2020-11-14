import React from "react";
import ReactDOM from "react-dom";
import { Text, Image, View} from "react-native";

const imgSrc = require('./arrow.png');

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello World</Text>
        <Image source={imgSrc} style={styles.image} />
        <Image source={'https://randomuser.me/api/portraits/women/25.jpg'} style={styles.image} />
      </View>
    );
  }
}

const styles = {
  image: {
    width: 24,
    height: 24,
    borderWidth: 1
  }
}