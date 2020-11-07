import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet, Image, ImageBackground, View, Text } from "react-native";
import UserList from "./user-list";
import Header from './header';
import sanityClient from './assets/client' 
import BackButton from './back-button'
import AppText from './assets/text'
import AppActiveText from './assets/text-active'
import AppInactiveText from './assets/text-inactive'
import SearchPage from './search-page'

class UserPage extends React.Component {
    constructor(props, user) {
        super(props);
        this.state = {
            user: user,
            tab: 'search'
        }
        console.log()
    }

  render() {
    return (
        <div>
        {/* Display Tabs */}
        <View style={styles.tabs}>
            <View style={styles.leftMargin}/>
            {this.state.tab === 'assigned' ? 
                (<View style={[styles.assignedTab, styles.active]}>
                    <AppActiveText><Text>ASSIGNED</Text></AppActiveText>
                </View>) : 
                (<View style={[styles.assignedTab, styles.inactive]}>
                    <AppInactiveText><Text>ASSIGNED</Text></AppInactiveText>
                </View>)
            }
            
            <View style={styles.centerMargin}/>
            {this.state.tab === 'search' ?
                (<View style={[styles.searchTab, styles.active]}>
                    <AppActiveText><Text>SEARCH</Text></AppActiveText>
                </View>) :
                (<View style={[styles.searchTab, styles.inactive]}>
                    <AppInactiveText><Text>SEARCH</Text></AppInactiveText>
                </View>)
            }
            <View style={styles.rightMargin}/>
        </View>

        {/* Display Selected Tab Content */}
        <View>
        {this.state.tab === 'assigned' ? 
            (<View>            </View>) : 
            (<SearchPage user={this.state.user}/>)
        }
        </View>
        </div>
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

export default UserPage;
