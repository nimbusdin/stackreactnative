import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

class AppInactiveText extends React.Component {



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
    color: 'rgba(0,0,0,0.54)',
    fontFamily: 'Source Sans Pro',
    // textAlign: 'center's
  }
});

export default AppInactiveText;
