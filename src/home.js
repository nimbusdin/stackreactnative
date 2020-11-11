import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet, Image, ImageBackground, View } from "react-native";
import UserList from "./user-list";
import Header from './header';
import sanityClient from './assets/client' 
import BackButton from './back-button'
import User from './user'
// import {Asset} from 'expo-asset';

// const imageURI = Asset.fromModule(require('./arrow.png')).uri;

// const image = require('./assets/aoeu.jpg');

class Home extends React.Component {
  state = {
    user: {},
    loading: true
  };

  componentDidMount() {
    // TODO: get users
    this.getUser();
  }

  async getUser() {
    sanityClient.fetch(`*[ _type == "user" && emailAddress.current == "dwight@viamaven.com"]`)
      .then((data) => {
        console.log(data);
        this.setState({user: data[0], loading: false});
        console.log(this.state.user);
      })
      .catch((err) => console.error(err))
    // const res = await fetch("https://randomuser.me/api/?results=20");
    // const { results} = await res.json();
    // // console.log(results)
    // this.setState({users: [...results], loading: false});
  }

  render() {
    return (
      <ScrollView
        noSpacer={true}
        noScroll={true}
        style={styles.container}
        showsVerticalSCrollIndicator = {false}
        showsHorizontalScrollIndicator = {false}
      >
          {this.state.loading ? (
          <ActivityIndicator
            style={[styles.centering, styles.gray]}
            color="#5d38aa"
            size="large"
          />
        ) : (
          <View>
            <Header title={this.state.user.name} />
            <User data={this.state}/>
          </View>
        )}
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: '375px',
    height: '812px',
    overflow: 'hidden',
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
  }
});

export default Home;
