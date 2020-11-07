import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

class AppText extends React.Component {



  render() {
    return (
      <Text style={styles.text}>
        {this.props.children}
      </Text>
    );
  }
}

var styles = StyleSheet.create({
  text: {
    fontSize: '14px',
    color: "black",
    fontFamily: 'Source Sans Pro'
  }
});

export default AppText;
