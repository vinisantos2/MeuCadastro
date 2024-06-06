import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pessoa } from './Pessoa';

const salvarProduto = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};
const removerProduto = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};
const obterProdutosJSON = async () => {
  try {
    let keys = [];
    keys = await AsyncStorage.getAllKeys();
    keys = keys.filter(valor => valor !== 'SnackDeviceId');
    keys = keys.filter(valor => valor !== 'EXPO_CONSTANTS_INSTALLATION_ID');

    return await AsyncStorage.multiGet(keys);
  } catch (e) {
    console.log('erro: obterProdutosJSON ' + e);
    return [];
  }
};
const obterProdutos = async () => {
  try {
    let objetos = [];
    let objJSON = await obterProdutosJSON();
    console.log(objJSON);
    objJSON.forEach((value, i) => {
     
      let pessoa = JSON.parse(value[1]);
      objetos.push(pessoa);
    });
    return objetos;
  } catch (e) {
    return [];
  }
};

const clearStorade = async () => {
  AsyncStorage.clear();
};

class GestorDados {
  async remover(chave) {
    await removerProduto(chave.toString());
  }

  async clear() {
    await clearStorade();
  }
  async adicionar(pessoa) {
    salvarProduto(pessoa.id.toString(), pessoa);
  }
  async obterTodos() {
    let lista = await obterProdutos();
    return lista;
  }
}

export default GestorDados;
