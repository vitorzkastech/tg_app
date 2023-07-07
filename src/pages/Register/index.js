import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
      } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


export default function Register() {
  const navigation = useNavigation();

  return (
    <View style={ styles.container }>
    
    <Animatable.View delay={450} animation="fadeInUp" style={ styles.containerForm }>
    <Text style={ styles.title }>Faça seu cadastro</Text>


    <Text style={styles.inputTitle}>Nome</Text>
    <TextInput placeholder="Digite seu nome..." style={styles.input}/>

    <Text style={styles.inputTitle}>E-mail</Text>
    <TextInput placeholder="Digite seu E-mail..." style={styles.input}/>

    <Text style={styles.inputTitle}>Senha</Text>
    <TextInput placeholder="Digite sua senha..." style={styles.input}/>

    <Text style={styles.inputTitle}>Confirme sua senha</Text>
    <TextInput placeholder="Confirme sua senha..." style={styles.input}/>



    <TouchableOpacity
    style={ styles.button }
    onPress={ () => navigation.navigate('Logar')}
    >
      <Text style={ styles.buttonText }> Cadastrar </Text>
    </TouchableOpacity>

    </Animatable.View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#AF8EFF'
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  containerForm:{
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 25,
    marginTop: 28,
    fontWeight: '450',
    alignSelf: 'center'
  },
  inputTitle:{
    fontSize: 17,
    marginTop: 20
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button:{
    backgroundColor: '#AF8EFF',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
})