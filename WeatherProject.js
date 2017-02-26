import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image} from 'react-native';

import Forecast from './Forecast';

//var Forecast = require('./Forecast');
export default class WeatherProject extends Component {
  // If you want to have a default zip code, you could add one here
  constructor(props) {
      super(props);
      this._handleTextChange = this._handleTextChange.bind(this);
      this.state = {
          zip: '',
          forecast: {
              main: 'Clouds',
              description: 'few clouds',
              temp: 45.7
          }
      };
  }
  // We'll pass this callback to the <TextInput>
  _handleTextChange(event) {
    // log statements are viewable in Xcode,
    // or the Chrome debug tools
    console.log(event.nativeEvent.text);
    this.setState({
      zip: event.nativeEvent.text
    });
}
  render() {
    return (
      <View style={styles.container}>
        <Text>
          You input {this.state.zip}.
        </Text>
        <Forecast
            main={this.state.forecast.main}
            description={this.state.forecast.description}
            temp={this.state.forecast.temp}
         />
        <TextInput
              style={styles.input}
              returnKeyType='go'
              onSubmitEditing={this._handleTextChange} />


    </View>
          );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4D',
  },
  welcome: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 12,
    padding: 2,
    borderWidth: 2,
    height: 40
    }
});
