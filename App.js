import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "Quebre o Biscoito",
      img: require('./src/biscoito.png'),
    }

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe ao lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso.",
    ];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.resetar = this.resetar.bind(this);
  }

  quebraBiscoito() {
    let numero = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: '"' + this.frases[numero] + '"',
      img: require("./src/biscoitoAberto.png"),
    })
  }

  resetar() {
    this.setState({
      textoFrase: "Quebre o Biscoito",
      img: require('./src/biscoito.png'),
    })
  }

  render() {
    return(
      <View style = { styles.container } >  
        <Image
          style = { styles.img }
          source = { this.state.img }
        />

        <Text style = { styles.textoFrase } > { this.state.textoFrase } </Text>
        
        <TouchableOpacity style = { styles.btn } onPress = { this.quebraBiscoito }>
          <View style = { styles.btnArea } >
            <Text style = { styles.btnText } >
              Quebrar Biscoito
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = {[ styles.btn, styles.espaco ]} onPress = { this.resetar }>
          <View style = { styles.btnArea } >
            <Text style = { styles.btnText } >
              Resetar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  espaco: {
    marginTop: 30,
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    marginBottom: 50,
    marginTop: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 15,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
});

export default App;