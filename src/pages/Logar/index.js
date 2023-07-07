import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Logar() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleLogin = async () => {
    if (email.trim() === '' || senha.trim() === '') {
      Alert.alert('Por favor, preencha todos os campos.');
    } else {
      try {
        const response = await fetch('http://192.168.0.168:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: email,
            password: senha,
          }),
        });

        if (response.ok) {
          navigation.navigate('Menu');
        } else {
          Alert.alert('Usuário e/ou senha incorretos.');
        }
      } catch (error) {
        console.error('Erro ao realizar login:', error);
        Alert.alert('Erro ao realizar login.');
      }
    }
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-Vindo</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>E-mail</Text>
        <TextInput
          placeholder="Digite seu E-mail..."
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.password}>Senha</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Digite sua senha..."
            style={styles.senha}
            secureTextEntry={!mostrarSenha}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
          <TouchableOpacity style={styles.showPasswordButton} onPress={toggleMostrarSenha}>
            <FontAwesome name={mostrarSenha ? 'eye-slash' : 'eye'} size={20} color="#555" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.RegisterText}> Fazer cadastro </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AF8EFF'
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 28
  },
  password: {
    fontSize: 20,
    marginTop: 28
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  senha: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button: {
    backgroundColor: '#AF8EFF',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  RegisterText: {
    color: '#a1a1a1',
    fontSize: 15,
    fontWeight: 'regular'
  },
  showPasswordButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  passwordInputContainer: {
    position: 'relative',
  },
});