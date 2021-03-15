import React, { Component } from 'react';
import { Image, View } from 'react-native';

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require("../../imgs/jokenpo.png")} />
      </View>
    )
  }
}

export default Topo;