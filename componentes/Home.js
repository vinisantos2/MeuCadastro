import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  
} from 'react-native';

import Item from './Item';
import GestorDados from '../dados/GestorDados';
import { useIsFocused } from '@react-navigation/native';


export default function Home({ navigation }) {
  const gestor = new GestorDados();

  const [pessoas, setPessoas] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    try {
      await gestor.obterTodos().then((args) => setPessoas(args));
    } catch (e) {
      console.log(e);
      // error reading value
    }
  };

  const deletarItem = (key) => {
    gestor.remover(key);
    
    getData();
  };

  return (
   
      <SafeAreaView style={styles.container}>
        <FlatList
          data={pessoas}
          renderItem={({ item }) => (
            <Item
            closeModal={getData}
              title={item.nome}
              nome={item.profissao}
              onDelete={() => deletarItem(item.id)}
              pessoa={item}
            />
          )}
          keyExtractor={(item) => item.id}
        />
       
      </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {},
});
