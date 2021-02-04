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
            <View>
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
        <View style={styles.space}/>
        <TitleText Heading="Kontrollera bild" />
        <InfoText subHeading="För att gå vidare tryck Välj, annars Ta om." />
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
    flex: 1,
    backgroundColor: 'white',
  },
  textButtons: {
    color: '#875195',
    fontSize: 20,
  },
  returnButtonView: {
    fontSize: 20,
    marginTop: 50,
    marginLeft: 20,
    color: "#ffffff",
    flexDirection: "row",
  },
  space: {
    marginBottom: 20,
  },
  nextPageButtonView: {
    fontSize: 20,
    marginTop: 50,
    marginRight: 20,
    color: "#ffffff",
    flexDirection: "row",
    position: 'absolute',
    right: 0,
  },
  imageView: {
    marginTop: 5,
},
  image: {
    aspectRatio: 1 / 1,
  },
})