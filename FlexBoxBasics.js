import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexBoxBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{marginTop: 20, width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{marginTop: 20, width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{marginTop: 20, width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View style={{marginTop: 20, width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{marginTop: 20, width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{marginTop: 20, width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    </View>
    );
  }
};
