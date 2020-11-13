import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import AppText from './assets/text/AppText'
import AppTextHeader from './assets/text/AppTextHeader'
import BackButton from './BackButton'

const Header = ({ onBack, title }) => (
  <SafeAreaView style={styles.headerContainer}>
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <BackButton/>  
      </View>    
      <View style={styles.headerCenter}>
        <AppTextHeader>
          {title}
        </AppTextHeader>
        {/* <Text accessibilityRole="heading" aria-level="3" style={styles.title}>{title}</Text> */}
      </View>
      <View style={styles.headerRight}/>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
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
    width: 54,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerRight: {
    order: 3,
    width: 54
  },
});

export default Header;