import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, Image } from 'react-native';

class BackButton extends React.Component {
  
    render() {
        return (
            <Image source={require('./assets/images/arrow.png')} style={styles.image} />
        );
    }
}

var styles = StyleSheet.create({
    image: {
      width: '24px',
      height: '24px',
      borderWidth: 1
    }
  });

export default BackButton;