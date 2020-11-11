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

class UserTabs extends React.Component {
    constructor(props, data) {
        super(props);
        this.state = {
            user: this.props.data.user,
            usertab: this.props.data.usertab
        };
        console.log(this.props.data)
    }

    render() {
        return(
            <View style={styles.tabs}>
                <View style={styles.leftMargin}/>
                {this.state.usertab === 'assigned' ? 
                    (<View style={[styles.assignedTab, styles.active]}>
                        <AppActiveText><Text>ASSIGNED</Text></AppActiveText>
                    </View>) : 
                    (<View style={[styles.assignedTab, styles.inactive]}>
                        <AppInactiveText><Text>ASSIGNED</Text></AppInactiveText>
                    </View>)
                }
                
                <View style={styles.centerMargin}/>
                {this.state.usertab === 'search' ?
                    (<View style={[styles.searchTab, styles.active]}>
                        <AppActiveText><Text>SEARCH</Text></AppActiveText>
                    </View>) :
                    (<View style={[styles.searchTab, styles.inactive]}>
                        <AppInactiveText><Text>SEARCH</Text></AppInactiveText>
                    </View>)
                }
                <View style={styles.rightMargin}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
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
}
)

export default UserTabs;