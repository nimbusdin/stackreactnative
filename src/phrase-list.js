import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet, FlatList, View, Text, Image } from "react-native";
// import PhraseItem from "./phrase-item";
import sanityClient from './assets/client'
import AppText from './assets/text'
import AppTextSecondary from './assets/text-secondary'
import CheckBox from 'react-native-check-box'

// const 

class PhraseList extends React.Component {
    constructor(props, data) {
        super(props);
        this.state = {
            user: this.props.data.user,
            phrases: [],
            userphrases: []
        };
        this.PhraseItem = this.PhraseItem.bind(this);
        console.log(this.state.user);
    }

    componentDidMount() {
        this.getPhrases();
        
    }

    async getPhrases() {
        sanityClient.fetch('*[_type=="phrase"]')
            .then((res) =>{
                this.setState({phrases: res});
            })
            .catch((err) => console.error(err))
    }

    PhraseItem ({ item: phrase }) {
        return (
          <View style={styles.row}>
            <View style={styles.rowData}>
                <View style={styles.categories}>
                    <AppTextSecondary>{phrase.categoryText} ● {phrase.subcategoryText}</AppTextSecondary>
                </View>
                <View style={styles.phrase}>
                    <AppText>{phrase.phraseText}</AppText>
                </View>
            </View>
            <View style={styles.checkbox}>
              <Image
                source={require('./assets/images/checkbox.png')}
                style={styles.checkboxBox}
              />
            </View>
          </View>
        );
      };

    render() {
        return (
            <FlatList
                data={this.state.phrases}
                renderItem={this.PhraseItem}
            >
            </FlatList>
        )
    }
}

const styles = StyleSheet.create({
    row: {
      width: 375,
      flexDirection: "row",
      // justifyContent: "center",
      // alignItems: "center",
      // padding: 15,
      // marginBottom: 13,
      backgroundColor: "white",
      borderBottomWidth: StyleSheet.hairlineWidth,
      // borderWidth: StyleSheet.hairlineWidth,
      borderColor: "rgba(0,0,0,0.1)",
      // borderRadius: '4px'
    },
    categories: {
      marginTop: 14
    },
    phrase: {
      marginTop: 9,
      marginBottom: 14
    },
    leftMargin: {
      width: 15,
    },
    rowIcon: {
      width: 64,
      height: 64,
      marginRight: 20,
      borderRadius: "50%",
      boxShadow: "0 1px 2px 0 rgba(0,0,0,0.1)"
    },
    rowData: {
      flex: 1,
      marginLeft: 15
    },
    rowDataText: {
      marginLeft: 15,
      fontSize: 15,
      textTransform: "capitalize",
      color: "#4b4b4b"
    },
    rowDataSubText: {
      fontSize: 13,
      opacity: 0.8,
      color: "#a8a689",
      marginTop: 4
    },
    checkbox: {
      width: 68,
      justifyContent: 'center',
      alignItems: 'center'
    },
    checkboxBox: {
      width: 24,
      height: 24
    }
  });

export default PhraseList;