import React, { Component } from 'react';
import * as reactNative from 'react-native';
import Icone from './src/components/Icone';
import Topo from './src/components/Topo';

class Joken extends Component {
  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaMaquina: '',
      resultado: ''
    }
  }

  start() {
    this.setState({
      escolhaUsuario: '',
      escolhaMaquina: '',
      resultado: ''
    })
    this.mudaPc()
  }

  mudaPc() {
    setTimeout(() => {
      var numAleatorio = Math.floor(Math.random() * 3);

      var escolhaComputador = '';

      switch (numAleatorio) {
        case 0: escolhaComputador = "PEDRA"; break;
        case 1: escolhaComputador = "PAPEL"; break;
        case 2: escolhaComputador = "TESOURA"; break;
        default: escolhaComputador = '';
      }

      var resultado = '';

      if (escolhaComputador === "PEDRA") {
        if (this.state.escolhaUsuario === "PEDRA") {
          resultado = "Empate"
        } else if (this.state.escolhaUsuario === 'PAPEL') {
          resultado = "Parabéns, você ganhou!";
        } else if (this.state.escolhaUsuario === "TESOURA") {
          resultado = "Que pena, você perdeu!";
        }
      }

      if (escolhaComputador === "PAPEL") {
        if (this.state.escolhaUsuario === "PAPEL") {
          resultado = "Empate"
        } else if (this.state.escolhaUsuario === 'TESOURA') {
          resultado = "Parabéns, você ganhou!";
        } else if (this.state.escolhaUsuario === "PEDRA") {
          resultado = "Que pena, você perdeu!";
        }
      }

      if (escolhaComputador === "TESOURA") {
        if (this.state.escolhaUsuario === "TESOURA") {
          resultado = "Empate"
        } else if (this.state.escolhaUsuario === 'PEDRA') {
          resultado = "Parabéns, você ganhou!";
        } else if (this.state.escolhaUsuario === "PAPEL") {
          resultado = "Que pena, você perdeu!";
        }
      }

      this.setState(
        {
          escolhaMaquina: escolhaComputador.toUpperCase(),
          resultado: resultado
        }
      )

      if (this.state.resultado != '') {
        return true;
      }

      this.mudaPc()
    }, 50);
  }

  mudaEscolha(escolha) {
    this.setState(
      {
        escolhaUsuario: escolha.toUpperCase(),

      }
    )
  }

  render() {
    return (
      <reactNative.View style={styles.corpo}>
        <Topo />
        <reactNative.View style={styles.viewBtns}>
          <reactNative.View style={styles.btnEscolha}>
            <reactNative.Button
              onPress={() => { this.mudaEscolha('pedra') }}
              title="Pedra"
            />
          </reactNative.View>
          <reactNative.View style={styles.btnEscolha}>
            <reactNative.Button
              onPress={() => { this.mudaEscolha('papel') }}
              title="Papel"
            />
          </reactNative.View>
          <reactNative.View style={styles.btnEscolha}>
            <reactNative.Button
              onPress={() => { this.mudaEscolha('tesoura') }}
              title="Tesoura"
            />
          </reactNative.View>
          <reactNative.View style={styles.btnEscolha}>
            <reactNative.Button
              onPress={() => { this.start() }}
              title="Start"
            />
          </reactNative.View>
        </reactNative.View>
        <reactNative.View style={styles.palco}>
          <reactNative.Text style={styles.txtResultado}>
            {this.state.resultado}
          </reactNative.Text>
          <Icone escolha={this.state.escolhaMaquina} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
        </reactNative.View>
      </reactNative.View>
    );
  }
}

const styles = reactNative.StyleSheet.create({
  btnEscolha: {
    width: 90,
  },
  viewBtns: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  palco: {
    marginTop: 10,
    alignItems: "center"
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    height: 60
  },
  corpo: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

reactNative.AppRegistry.registerComponent('Joken', () => Joken);
