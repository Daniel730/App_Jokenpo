import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MeuComponente extends Component{
  render(){
    return(
      <View>
        <Text>
          {this.props.propriedade1}
        </Text>
        <Text>
          {this.props.propriedade2}
        </Text>
      </View>
    )
  }
}

class Joken extends Component{
  render(){
    return(
      <MeuComponente propriedade1='teste1' propriedade2='teste2'>

      </MeuComponente>
    );
  }
}

AppRegistry.registerComponent('Joken', () => Joken);
