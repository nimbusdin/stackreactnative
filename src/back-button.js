import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, Image } from 'react-native';
import AppText from './assets/text'
import AppHeaderText from './assets/text-header'

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
    }
  });

export default BackButton;