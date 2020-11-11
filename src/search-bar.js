import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet, Image, ImageBackground, View, Text, TextInput, TouchableHighlight, TouchableOpacity, Modal, Alert, Animated, Dimensions, PanResponder, FlatList } from "react-native";
import Filter from './filter'
import AppHeaderText from './assets/text-header'
import AppText from './assets/text'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            showFilter: false,
            phraseFilters: [5,4,3,2,1],
            exceptional: false,

        };
        console.log(this.state.phraseFilters)
    }

    onChangeText(text) {
        this.setState({searchString: text});
        // console.log(this.state.searchString);
    }

    showFilter() {
        this.setState({showFilter: true})
    }

    closeFilter()  {
        this.setState({showFilter: false})
    }

  render() {
    return (
        <View>
            <Modal
                animationType="fade"
                transparent
                visible={this.state.showFilter}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.overlay}>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent
                visible={this.state.showFilter}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.filterView}>
                    <View style={styles.filterModal}>
                    <TouchableOpacity
                        onPress={() => {
                            this.closeFilter();
                        }}>
                        <View style={styles.closeModal}>
                            <View style={styles.closeModalButton}></View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.filterData}>
                        <View style={styles.filterTitle}>
                            <AppHeaderText>Mastery Levels</AppHeaderText>
                        </View>
                        <View style={styles.filterDescription}>
                            <AppText><Text style={styles.filterText}>Mastery levels separate phrases by exceeds, meets, and marginal</Text></AppText>
                        </View>
                        <View style={styles.filterItem}>
                            <View style={styles.filterItemTextArea}>
                                <Text style={styles.filterText}>Exceptional</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.phraseFilters.includes(5)) {
                                        this.state.phraseFilters.splice(this.state.phraseFilters.indexOf(5), 1)
                                        console.log(this.state.phraseFilters)
                                    } else {
                                        this.state.phraseFilters.push(5)
                                        console.log(this.state.phraseFilters)
                                        console.log(this.state.phraseFilters.includes(5))
                                    }
                                }}>
                                    <View style={styles.filterCheckboxArea}>
                                    {this.state.phraseFilters.includes(5) ?
                                        (<Image source={require('./assets/images/checked.png')}
                                        style={styles.filterCheckbox}/>) :
                                        (<Image source={require('./assets/images/unchecked.png')}
                                        style={styles.filterCheckbox}/>)
                                    }
                                    </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.filterItem}>
                            <View style={styles.filterItemTextArea}>
                                <Text style={styles.filterText}>Excellent</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.phraseFilters.includes(5)) {
                                        this.state.phraseFilters.splice(array.indexOf(5), 1)
                                    }
                                }}>
                                    <View style={styles.filterCheckboxArea}>
                                    {this.state.phraseFilters.includes(5) ?
                                        (<Image source={require('./assets/images/checked.png')}
                                        style={styles.filterCheckbox}/>) :
                                        (<Image source={require('./assets/images/unchecked.png')}
                                        style={styles.filterCheckbox}/>)
                                    }
                                    </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.filterItem}>
                            <View style={styles.filterItemTextArea}>
                                <Text style={styles.filterText}>Competent</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.phraseFilters.includes(5)) {
                                        this.state.phraseFilters.splice(array.indexOf(5), 1)
                                    }
                                }}>
                                    <View style={styles.filterCheckboxArea}>
                                    {this.state.phraseFilters.includes(5) ?
                                        (<Image source={require('./assets/images/unchecked.png')}
                                        style={styles.filterCheckbox}/>) :
                                        (<Image source={require('./assets/images/checked.png')}
                                        style={styles.filterCheckbox}/>)
                                    }
                                    </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.filterItem}>
                            <View style={styles.filterItemTextArea}>
                                <Text style={styles.filterText}>Marginal</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.phraseFilters.includes(5)) {
                                        this.state.phraseFilters.splice(array.indexOf(5), 1)
                                    }
                                }}>
                                    <View style={styles.filterCheckboxArea}>
                                    {this.state.phraseFilters.includes(5) ?
                                        (<Image source={require('./assets/images/unchecked.png')}
                                        style={styles.filterCheckbox}/>) :
                                        (<Image source={require('./assets/images/checked.png')}
                                        style={styles.filterCheckbox}/>)
                                    }
                                    </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.filterItem}>
                            <View style={styles.filterItemTextArea}>
                                <Text style={styles.filterText}>Unsatisfactory</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.phraseFilters.includes(5)) {
                                        this.state.phraseFilters.splice(array.indexOf(5), 1)
                                    }
                                }}>
                                    <View style={styles.filterCheckboxArea}>
                                    {this.state.phraseFilters.includes(5) ?
                                        (<Image source={require('./assets/images/unchecked.png')}
                                        style={styles.filterCheckbox}/>) :
                                        (<Image source={require('./assets/images/checked.png')}
                                        style={styles.filterCheckbox}/>)
                                    }
                                    </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.container}>
                <View style={styles.leftMargin}>
                    <TouchableOpacity
                        onPress={() => {
                            this.showFilter();
                        }}>
                        <Image source={require('./assets/images/filter.png')} style={styles.filter}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText= {text => this.onChangeText(text)}
                    >
                    </TextInput>
                </View>
                <View style={styles.searchButton}>
                    <TouchableOpacity>
                        <Image source={require('./assets/images/magnifying.png')} style={styles.search}></Image>
                    </TouchableOpacity>
                </View>
            </View>
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
      width: '60px',
      justifyContent: 'center',
      alignItems: 'center'
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
      width: '60px',
      justifyContent: 'center',
      alignItems: 'center'
  },
  filter: {
      height: '24px',
      width: '24px'
  },
  search: {
      height: '24px',
      width: '24px'
  },
  searchInput: {
    height: '38px',
    width: '255px',
    borderWidth: '1px',
    borderColor: '#979797'
  },
  filterView: {
      width: '100%',
    //   borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    //   backgroundColor: 'white',
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    //   flex: 1
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.1523)',
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  filterModal: {
      width: '375px',
      backgroundColor: 'white',
      marginBottom: 164,
      flexDirection: 'column'
  },
  closeModal: {
      width: '100%',
      height: '20px',
      alignItems: 'center',
      justifyContent: 'center'
  },
  closeModalButton: {
      width: 30,
      height: 4,
      backgroundColor: '#979797',
      borderRadius: 2
  },
  filterData: {
      marginLeft: 28,
      marginRight: 28,
      flexDirection: 'column',
      marginBottom: 15
  },
  filterTitle: {
      height: 32,
      marginBottom: 6
  },
  filterDescription: {
      paddingBottom: 13
  },
  filterText: {
      fontSize: 16,
  },
  filterItem: {
      height: 48,
      flexDirection: 'row',
      alignItems: 'center'
  },
  filterItemTextArea: {
      flex: 1
  },
  filterCheckboxArea: {
      width:30,
      alignItems:'center',
      justifyContent:'center'
  },
  filterCheckbox: {
      width:24,
      height:24
  }



});

export default SearchBar;
