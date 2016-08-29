import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export default class switchButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props.status);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.props.status}</Text>
        <TouchableHighlight onPress={this.props.actions.switchOn} style={styles.button}>
          <Text>ON</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.actions.switchOff} style={styles.button}>
          <Text>OFF</Text>
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});
