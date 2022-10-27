import React from 'react';
import {
ImageBackground,
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View
} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
   let imc = this.state.massa / (this.state.altura * this.state.altura)
   let s = this.state
   s.resultado = imc
   if (s.resultado < 18.5){
     s.resultadoText ='abaixo do peso. Dietas também ajudam no ganho de massa magra'
    }
    else if (s.resultado < 25) {
     s.resultadoText ='no peso ideal. Continue assim'
    }
    else if (s.resultado < 30) {
     s.resultadoText ='com sobrepeso. Vamos cuidar da saúde?'
    }
    else if (s.resultado < 35) {
     s.resultadoText ='com obesidade Grau 1. Considere uma dieta livre de carboidratos pobres e açúcares'
    }
    else if (s.resultado < 40) {
      s.resultadoText ='com obesidade Grau 2. Não deixe a situação sair de controle. Você se exercita?'
    }
    else{
      s.resultadoText ='obesidade Grau 3. Procure um endócrino. A situação está fora de controle'
    }
   this.setState(s)



  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
            source={{ uri: 'https://www.wallausaude.com.br/site/app/webroot/blog/wp-content/uploads/2019/07/15132-1360x765.jpg' }}>

        <View style={styles.entrada}>
          <TextInput autoCapitalize="none" placeholder="Qual a sua altura?" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput autoCapitalize="none" placeholder="Qual o seu peso?"  keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado,{fontSize:20}}>Seu ìndice de massa corporal é {this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado,{fontSize:20}]}>Você está {this.state.resultadoText}</Text>
        </ImageBackground>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  entrada:{
    flexDirection:'row',
  },
  input:{
    height:50,
    textAlign:"center",
    width:"50%",
    fontSize:20,
    marginTop:1,
  },
  button:{
   backgroundColor:"grey",
  },
  buttontext:{
    textAlign:"center",
    padding:10,
    fontSize:25,
    fontWeight:'bold',
    color:"#FFF",
  },
  resultado:{
    alignSelf:"center",
    color:"lightgray",
    fontSize:45,
    fontWeight:'bold',
    padding: 6,
    color:"#000",
  },
  textInput: {
    color: 'green',
   },
});