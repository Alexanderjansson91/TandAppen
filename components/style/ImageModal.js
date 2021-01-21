import React, {useState} from 'react';
import { View, Text,Modal } from 'react-native';

const ImageModal = ({ open }) => {
    return (
      <Modal isVisible={open}>
        <View>
           <Text>HELLO TEXT</Text>
        </View>
      </Modal>
    );
}

export default ImageModal;
