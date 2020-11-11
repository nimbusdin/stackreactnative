import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet, Image, ImageBackground, View, Text } from "react-native";
import SearchBar from './search-bar'
import AppActiveText from './assets/text-active'
import AppInactiveText from './assets/text-inactive'

class SearchTabs extends React.Component {
    constructor(props, data) {
        super(props);
        this.state = {
            user: this.props.data.user,
            searchtab: this.props.data.searchtab
        }
        console.log(this.state.searchtab)
    }

    render() {
        return ( 
            <View style={styles.tabs}>
                <View style={styles.leftMargin}></View>
                {this.state.searchtab === 'assigned' ? 
                    (<View style={[styles.categoriesTab, styles.active]}>
                        <AppActiveText><Text>CATEGORIES</Text></AppActiveText>
                    </View>) : 
                    (<View style={[styles.categoriesTab, styles.inactive]}>
                        <AppInactiveText><Text>CATEGORIES</Text></AppInactiveText>
                    </View>)
                }
                <View style={styles.centerMargin}></View>
                {this.state.searchtab === 'phrases' ? 
                    (<View style={[styles.phrasesTab, styles.active]}>
                        <AppActiveText><Text>PHRASES</Text></AppActiveText>
                    </View>) : 
                    (<View style={[styles.phrasesTab, styles.inactive]}>
                        <AppInactiveText><Text>PHRASES</Text></AppInactiveText>
                    </View>)
                }
                <View style={styles.rightMargin}></View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    tabs: {
        width: '375px',
        height: '32px',
        flexDirection: "row",
    },
    leftMargin: {
        width: '25px',
        height: '32px',
    },
    categoriesTab: {
        width: '162px',
        height: '32px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerMargin: {
        width: '1px',
        height: '32px',
    },
    phrasesTab: {
        width: '162px',
        height: '32px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightMargin: {
        width: '25px',
        height: '32px',
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

export default SearchTabs;