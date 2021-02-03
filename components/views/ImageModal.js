import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TitleText from '../../components/text/HeadingText'
import InfoText from '../../components/text/Subheading'

//Image modal how diplay the resualt from camera
const ImageModal = ({ modalOpen, onClose, returnButton, costumerImage, nextPage, nextPageText }) => {
  const { container, modalToggle, modalClose, imageStyle } = styles;
  return (
    <Modal visible={modalOpen} animationType='slide'>
      <View style={container}>
        <View style={styles.parent}>
          {/* Close modal button */}
          <TouchableOpacity style={styles.returnButtonView} onPress={onClose} >
            <View >
              <Text style={styles.textButtons}>{returnButton}</Text>
            </View>
          </TouchableOpacity>

          {/* navigate to nextåage button */}
          <TouchableOpacity style={styles.nextPageButtonView} onPress={nextPage}>
            <View>
              <Text style={styles.textButtons}>{nextPageText}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Infotext and Image */}
        <View style={styles.space} >
          <TitleText Heading='Kontrollera bild' />
          <InfoText subHeading="För att gå vidare tryck Välj, annars Ta om." />
        </View>
        <View style={styles.imageView}>
          <Image style={styles.image} source={costumerImage} />
        </View>
      </View>
    </Modal>
  );
}

export default ImageModal;

//Style for Image Modal
const styles = StyleSheet.create({
  container: {
    height: "75%",
    width: "100%",
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  textButtons: {
    color: '#875195',
    fontSize: 20,
  },
  returnButtonView: {
    fontSize: 20,
    marginTop: 70,
    marginLeft: 20,
    color: "#ffffff",
    flexDirection: "row",
  },
  space: {
    marginBottom: 0,
  },
  nextPageButtonView: {
    fontSize: 20,
    marginTop: 70,
    marginRight: 20,
    color: "#ffffff",

    flexDirection: "row",
    position: 'absolute',
    right: 0
  },
  imageView: {
    marginBottom: -50
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {

    aspectRatio: 1 / 1
  },
})