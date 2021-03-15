import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

class Icone extends Component {
    render() {
        if (this.props.escolha === 'PEDRA') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require("../../imgs/pedra.png")} />
                </View>
            )
        } else if (this.props.escolha === 'PAPEL') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require("../../imgs/papel.png")} />
                </View>
            )
        } else if (this.props.escolha === 'TESOURA') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require("../../imgs/tesoura.png")} />
                </View>
            )
        } else {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}:</Text>
                </View>
            )
        }
    }
}
const styles = StyleSheet.create({
    icone: {
        alignItems: 'center',
        marginBottom: 20,
        height: 100
    },
    txtJogador: {
        fontWeight: 'bold',
        color: 'blue',
        margin: 20,
        fontSize: 18
    }

})

export default Icone;