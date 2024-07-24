import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import images from '../assets/images';

export default function CModal(props) {
  let {onPressClose, visible} = props;
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.modalview}>
        <View style={styles.innerviewmodal}>
          <Text style={styles.modaltitle}>Modal Title</Text>
          <Text style={styles.modaltext}>Modal Text</Text>
          <TouchableOpacity onPress={onPressClose}>
            <Image source={images.close} style={styles.closeicon} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modaltitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modaltext: {
    fontSize: 15,
  },

  innerviewmodal: {
    width: 300,
    height: 300,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    gap: 20,
  },
  closeicon: {
    width: 20,
    height: 20,
  },
});
