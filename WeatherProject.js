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
          forecast: null
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
    var content = null;
    if (this.state.forecast !== null) {
        content = <Forecast
            main={this.state.forecast.main}
            description={this.state.forecast.description}
            temp={this.state.forecast.temp}
            />;
    }
    return (
      <View style={styles.container}>
        <Image source={require('./img/snow.png')}
            style={styles.backdrop}
            resizeMode="cover"
            >
        <View style={styles.overlay}>
         <View style={styles.row}>
            <Text>
                Current weather for
            </Text>
            <View style={styles.zipContainer}>
                <TextInput
                    style={styles.input}
                    returnKeyType='go'
                    onSubmitEditing={this._handleTextChange} />
            </View>
       </View>
       {content}

      </View>
      </Image>
    </View>
          );
  }
};

var styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4D',
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
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
