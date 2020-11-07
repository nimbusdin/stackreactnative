import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet, Image, ImageBackground } from "react-native";
import UserList from "./user-list";
import Header from './header';
import sanityClient from './assets/client' 
import BackButton from './back-button'
import UserPage from './user-page'

class User extends React.Component {
    constructor(props, user) {
        super(props);
        this.state = {
            user: user
        }
    }

  render() {
    return (
        <UserPage
            user={this.state.user}
        />
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
  }
});

export default User;
