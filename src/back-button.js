import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, Image } from 'react-native';
import AppText from './assets/text'
import AppHeaderText from './assets/text-header'

class BackButton extends React.Component {
  
    render() {
        return (
            <Image source={require('./arrow.png')} />
        );
    }
}

export default BackButton;