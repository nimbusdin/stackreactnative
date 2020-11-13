import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

class AppTextActive extends React.Component {



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
    color: '#5d38aa',
    fontFamily: 'Source Sans Pro',
    // textAlign: 'center'
  }
});

export default AppTextActive;
