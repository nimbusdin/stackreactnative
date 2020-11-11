import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet, Image, ImageBackground, View, Text } from "react-native";
import SearchBar from './search-bar'
import SearchTabs from './search-tabs.js'
import PhraseList from './phrase-list'

class SearchPage extends React.Component {
    constructor(props, data) {
        super(props);
        this.state = {
            user: this.props.data.user,
            searchtab: 'phrases'
        }
        console.log(this.props.data)
        console.log(this.state)
    }

  render() {
    return (
        <View>
            <SearchBar/>
            <SearchTabs data={this.state}/>
            <PhraseList data={this.state}/>
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
