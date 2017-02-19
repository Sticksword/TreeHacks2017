"use strict";
import React, { Component } from 'react';
import Camera from 'react-native-camera';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {cameraType: Camera.constants.Type.back};
  }

  render() {
    return (
      <Camera
        ref="cam"
        style={styles.container}
        type={this.state.cameraType}>
        <View style={styles.buttonBar}>
          <TouchableHighlight style={styles.button} onPress={this._switchCamera.bind(this)}>
            <Text style={styles.buttonText}>Flip</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this._takePicture.bind(this)}>
            <Text style={styles.buttonText}>Take</Text>
          </TouchableHighlight>
        </View>
      </Camera>
    );
  }

  _switchCamera() {
    var state = this.state;
    console.log(this.state);
    state.cameraType = state.cameraType === Camera.constants.Type.back ? Camera.constants.Type.front : Camera.constants.Type.back;
    this.setState(state);
  }

  _takePicture() {
    console.log(this.refs);
    this.refs.cam.capture(function(err, data) {
      console.log(err, data);
    });
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  buttonBar: {
    flexDirection: "row",
    position: "absolute",
    bottom: 25,
    right: 0,
    left: 0,
    justifyContent: "center"
  },
  button: {
    padding: 10,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    margin: 5
  },
  buttonText: {
    color: "#FFFFFF"
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
