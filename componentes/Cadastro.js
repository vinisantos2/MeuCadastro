import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';
import GestorDados from '../dados/GestorDados';
export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [profissao, setProfissao] = useState('');
  const gestor = new GestorDados();

  function getPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    var passwordLength = 16;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
  }



  function _cadastrar() {



    console.log(nome.length)
    if (nome.length < 1) {

      Alert.alert('Alerta', 'Preencher o campo nome')
      return;
    } else if (profissao.length < 1) {
      Alert.alert('Alerta', 'Preencher o campo profissão')
      return;
    }

    let obj = {
      id: getPassword(),
      nome: nome,
      profissao: profissao,
    };

    salvarProduto(obj);
  }

  function limparBanco() {
    gestor.clear()
  }


  async function salvarProduto(obj) {
    gestor.adicionar(obj);

    setNome('')
    setProfissao('')
    Alert.alert("DAdos salva", "Dados salvo com sucesso")
  }

  return (
    <View style={styles.container}>


      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        keyboardType="ascii-capable"
        placeholder="Nome"
      />

      <TextInput
        style={styles.input}
        value={profissao}
        onChangeText={setProfissao}
        keyboardType="ascii-capable"
        placeholder="Profissão"
      />

      <TouchableOpacity onPress={_cadastrar} style={styles.botao}>
        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',

    alignItems: 'center',
    backgroundColor: '#808080',
  },
  botao: {
    backgroundColor: 'blue',
    padding: 20,
    width: '50%',
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },

  text: {
    fontSize: 25,
    color: 'white',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 15,
    width: '90%',
    fontSize: 25,
    color: 'black',
    padding: 15,
  },
});
