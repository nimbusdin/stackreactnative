import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import AppText from './assets/text'
import AppHeaderText from './assets/text-header'
import BackButton from './back-button'

const Header = ({ onBack, title }) => (
  <SafeAreaView style={styles.headerContainer}>
    <View style={styles.header}>
      <View style={styles.headerCenter}>
        
        <AppHeaderText>
          {title}
        </AppHeaderText>
        {/* <Text accessibilityRole="heading" aria-level="3" style={styles.title}>{title}</Text> */}
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  headerContainer: {
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: '#ff4e3f',
    // backgroundColor: '#ff8179',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 76
  },
  headerCenter: {
    flex: 1,
    order: 2
  },
  headerLeft: {
    order: 1,
    width: 80
  },
  headerRight: {
    order: 3,
    width: 80
  },
  // title: {
  //   // fontSize: 20,
  //   // fontWeight: '600',
  //   textAlign: 'center',
  //   // color: 'black',
  //   // fontFamily: 'Source Sans Pro'
  // },
});

export default Header;