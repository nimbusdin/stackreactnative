import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet, Image, ImageBackground, View, Text, TextInput } from "react-native";
import UserList from "./user-list";
import Header from './header';
import sanityClient from './assets/client' 
import BackButton from './back-button'
import AppText from './assets/text'
import AppActiveText from './assets/text-active'
import AppInactiveText from './assets/text-inactive'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        }
    }

    onChangeText(text) {
        this.setState({searchString: text});
        console.log(this.state.searchString);
    }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.leftMargin}></View>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    onChangeText= {text => this.onChangeText(text)}
                >

                </TextInput>
            </View>
            <View style={styles.searchButton}></View>
        </View>
    );
  }
}

var styles = StyleSheet.create({

  container: {
    backgroundColor: "white",
    width: '375px',
    height: '60px',
    flexDirection: 'row'
    // top: '50px',
  },
  leftMargin: {
      height: '60px',
      width: '60px'
  },
  searchBar: {
      height: '60px',
      width: '255px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  searchButton: {
      height: '60px',
      width: '60px'
  },
  searchInput: {
    height: '38px',
    width: '255px',
    borderWidth: '1px',
    borderColor: '#979797'
  },
});

export default SearchBar;
