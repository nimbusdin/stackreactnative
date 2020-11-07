import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet, Image, ImageBackground, View, Text } from "react-native";
import UserList from "./user-list";
import Header from './header';
import sanityClient from './assets/client' 
import BackButton from './back-button'
import AppText from './assets/text'
import AppActiveText from './assets/text-active'
import AppInactiveText from './assets/text-inactive'
import SearchBar from './search-bar'

class SearchPage extends React.Component {
    constructor(props, user) {
        super(props);
        this.state = {
            user: user,
            tab: 'phrases'
        }
        console.log()
    }

  render() {
    return (
        <View>
            <SearchBar/>
        </View>
    );
  }
}

var styles = StyleSheet.create({

  container: {
    backgroundColor: "white",
    width: '375px',
    height: '812px',
    top: '50px',
  },
  centering: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: '100vh'
  },
  image: {
    width: '50px',
    height: '50px',
    marginRight: 20,
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.1)"
  },
  tabs: {
      width: '375px',
      height: '48px',
      flexDirection: "row",
  },
  leftMargin: {
      width: '25px',
      height: '48px',
  },
  assignedTab: {
      width: '162px',
      height: '48px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  centerMargin: {
      width: '1px',
      height: '48px',
  },
  searchTab: {
      width: '162px',
      height: '48px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  rightMargin: {
      width: '25px',
      height: '48px',
  },
  active: {
    borderColor: '#5d38aa',
    borderBottomWidth: 2
  },
  inactive: {
    borderColor: 'rgba(0,0,0,0.54)',
    // borderBottomWidth: 2
  },
});

export default SearchPage;
