import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const ImageModal = ({ modalOpen, onClose, returnButton, costumerImage, nextPage, nextPageText }) => {
  const { container, modalToggle, modalClose, imageStyle } = styles;
  return (
    <Modal visible={modalOpen} animationType='slide'>
      <View>
        <View style={styles.ButtonsContainer}>
          
           {/* Button number 1*/}
          <TouchableOpacity onPress={onClose} >
            <View style={styles.buttonView}>
              <Text style={styles.textButton}>{returnButton}</Text>
            </View>
          </TouchableOpacity>

          {/* Button number 2*/}
          <TouchableOpacity onPress={nextPage}>
            <View style={styles.buttonView}>
              <Text style={styles.textButton}>{nextPageText}</Text>
            </View>
          </TouchableOpacity>

        </View>
        <Image style={styles.imageStyle} source={costumerImage} />
      </View>
    </Modal>
  );

}

export default ImageModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonView: {
    margin: 40,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
  },

  ButtonsContainer: {
    fontSize: 20,
    marginTop: 100,
    marginLeft: 20,
    color: "#ffffff",
    flexDirection: "row",
  },
})