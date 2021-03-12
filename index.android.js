import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Joken extends Component{
  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaMaquina: '',
      resultado: ''
    }
  }

  start(){
    this.setState({
      escolhaUsuario: '',
      escolhaMaquina: '',
      resultado: ''
    })
    this.mudaPc()
  }

  mudaPc(){
    setTimeout(() => {
      var numAleatorio = Math.floor(Math.random() * 3);

      var escolhaComputador = '';

      switch(numAleatorio){
        case 0: escolhaComputador = "PEDRA"; break;
        case 1: escolhaComputador = "PAPEL"; break;
        case 2: escolhaComputador = "TESOURA"; break;
      }

      var resultado = '';

      if(escolhaComputador == "PEDRA"){
        if(this.state.escolhaUsuario == "PEDRA"){
          resultado = "Empate"
        }else if(this.state.escolhaUsuario == 'PAPEL'){
          resultado = "Parabéns, você ganhou!";
        }else if(this.state.escolhaUsuario == "TESOURA"){
          resultado = "Que pena, você perdeu!";
        }
      }

      if(escolhaComputador == "PAPEL"){
        if(this.state.escolhaUsuario == "PAPEL"){
          resultado = "Empate"
        }else if(this.state.escolhaUsuario == 'TESOURA'){
          resultado = "Parabéns, você ganhou!";
        }else if(this.state.escolhaUsuario == "PEDRA"){
          resultado = "Que pena, você perdeu!";
        }
      }

      if(escolhaComputador == "TESOURA"){
        if(this.state.escolhaUsuario == "TESOURA"){
          resultado = "Empate"
        }else if(this.state.escolhaUsuario == 'PEDRA'){
          resultado = "Parabéns, você ganhou!";
        }else if(this.state.escolhaUsuario == "PAPEL"){
          resultado = "Que pena, você perdeu!";
        }
      }

      this.setState(
        {
          escolhaMaquina: escolhaComputador.toUpperCase(),
          resultado: resultado
        }
      )
      
      if(this.state.resultado != ''){
        return true;
      }

      this.mudaPc()
    }, 500);
  }

  mudaEscolha(escolha){
    this.setState(
      {
        escolhaUsuario: escolha.toUpperCase(),
        
      }
    )
  }

  render(){
    return(
      <View>
        <Topo/>
        <Corpo />

        <View style={styles.palco}>
          <Text>
            Escolha IA: { this.state.escolhaMaquina }
          </Text>
          <Text>
            Escolha usuário: { this.state.escolhaUsuario }
          </Text>
          <Text>
            Resultado: {this.state.resultado}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
  },
  viewBtns: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  palco:{
    marginTop: 10,
    alignItems:"center"
  }
})

class Topo extends Component{
  render(){
    return(
      <View>
        <Image source={require("./imgs/jokenpo.png")} />
      </View>
    )
  }
}

class Corpo extends Component{
  render(){
    return(
      <View style={styles.viewBtns}>
        <View style={styles.btnEscolha}>
          <Button 
            onPress={() => { this.mudaEscolha('pedra') }}
            title="Pedra"
          />
        </View> 
        <View style={styles.btnEscolha}>
          <Button 
            onPress={() => { this.mudaEscolha('papel') }}
            title="Papel"
          />
        </View> 
        <View style={styles.btnEscolha}>
          <Button 
            onPress={() => { this.mudaEscolha('tesoura') }}
            title="Tesoura"
          />
        </View>
        <View style={styles.btnEscolha}>
            <Button
            onPress={() => { this.start()}}
            title="Start"
          />
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('Joken', () => Joken);
