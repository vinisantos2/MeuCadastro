import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ModalApp from './Modal';

export default function Item({ title, nome, onDelete, pessoa, closeModal }) {
  return (
    <View style={styles.item}>
      <View style={styles.viewTexto}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{nome}</Text>
      </View>

      <View style={styles.viewIcons}>
        <ModalApp pessoa={pessoa} closeModal={closeModal} />

        <TouchableOpacity style={styles.button} onPress={onDelete}>
          <Ionicons name="trash-sharp" size={30} color="yellow" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 15,
  },
  viewIcons: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '30%',
  },
  viewTexto: {
    alignContent: 'center',
    borderColor: 'white',
    width: '70%',
    padding: 5,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#00BFFF',

    marginVertical: 5,
  },
  title: {
    fontFamily: 'Verdana',
    fontSize: 30,
  },

  subtitle: {
    fontFamily: 'Verdana',
    fontSize: 20,
  },
});
