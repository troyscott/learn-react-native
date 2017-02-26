import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
// ES6 or ES2015
export default class Forecast extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    Current conditions: {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {this.props.temp}F
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    bigText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    mainText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF'
    }

});
