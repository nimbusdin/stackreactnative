import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

class AppTextHeader extends React.Component {



  render() {
    return (
      <Text style={styles.textHeader}>
        {this.props.children}
      </Text>
    );
  }
}

var styles = StyleSheet.create({
  textHeader: {

    color: "black",
    fontFamily: 'Source Sans Pro',
    textAlign: 'center',
    fontSize: 20
  }
});

export default AppTextHeader;
