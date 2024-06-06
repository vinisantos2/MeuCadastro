import React, { useState, useEffect } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Button,
} from 'react-native';
import GestorDados from '../dados/GestorDados';
import { useIsFocused } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ModallApp = ({ closeModal, pessoa }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [profissao, setProfissao] = useState('');
  const gestor = new GestorDados();
  const isFocused = useIsFocused();
  useEffect(() => {
    setNome(pessoa.nome);
    setProfissao(pessoa.profissao);
  }, [isFocused]);

  function setarModal() {
    pessoa.nome = nome;
    pessoa.profissao = profissao;
    gestor.adicionar(pessoa);
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        onDismiss={closeModal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStile}>Editar dados </Text>
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
            <View style={styles.viewBotoes}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setarModal()}>
                <Text style={styles.textStyle}>Alterar Dados</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        <Ionicons name="pencil-sharp" size={30} color="yellow" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',

  },

  viewBotoes: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },

  textStile: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Monospace',
    fontWeight: 'bold'

  },
  modalView: {
    margin: 20,
    backgroundColor: '#808080',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#cococo',
    marginTop: 15,
    width: '100%',
    fontSize: 25,
    color: 'black',
    padding: 15,
  },
});

export default ModallApp;
