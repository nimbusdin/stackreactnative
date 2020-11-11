import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet, Image, ImageBackground } from "react-native";
import UserList from "./user-list";
import Header from './header';
import sanityClient from './assets/client' 
import BackButton from './back-button'
import UserPage from './user-page'

class User extends React.Component {
    constructor(props, data) {
        super(props);
        this.state = {
            user: this.props.data.user
        };
        console.log(this.props.data)
    }

  render() {
    return (
        <UserPage
            data={this.state}
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
