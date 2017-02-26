var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} = ReactNative;

var WeatherProject = React.createClass({
  // If you want to have a default zip code, you could add one here
  getInitialState() {
    return ({
      zip: ''
    });
  },
  // We'll pass this callback to the <TextInput>
  _handleTextChange(event) {

    // log statements are viewable in Xcode,
    // or the Chrome debug tools
    console.log(event.nativeEvent.text);

    this.setState({
      zip: event.nativeEvent.text
    });
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.zip}.
        </Text>
        <TextInput
              style={styles.input}
              onSubmitEditing={this._handleTextChange}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
    }
});

module.exports = WeatherProject;
