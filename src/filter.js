import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet, Image, ImageBackground, View, Text, TextInput, TouchableHighlight, TouchableOpacity, Modal, Alert } from "react-native";

class Filter extends React.Component {
    constructor(props, data) {
        super(props);
        this.state = {
            showFilter: this.props.data.showFilter
        }
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.showFilter}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.overlay}>
                    aoeu
                </View>
            </Modal>
    );}
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex:1,
        justifyContent: 'flex-end'
    }
})

export default Filter;