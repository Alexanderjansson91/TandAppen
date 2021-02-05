import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TitleText from '../../components/text/HeadingText';

//My modal how display an example
const ExampleModal = ({
  onClose,
  closeExampleButton,
  exampleImage,
  modalExampleOpen,
  icon,
}) => {
  return (
    <Modal visible={modalExampleOpen} animationType="slide">
      <View style={styles.container}>
        {/* Return button*/}
        <TouchableOpacity style={styles.returnButtonView} onPress={onClose}>
          <View>
            <Text style={styles.textButtons}>{closeExampleButton}</Text>
            <MatetrialCommunityIcons style={styles.iconStyles} name={icon} />
          </View>
        </TouchableOpacity>
        {/*Image and heading*/}
        <View style={styles.space} />
        <TitleText Heading="Exempelbild" />
        <View style={styles.imageView}>
          <Image style={styles.image} source={exampleImage} />
        </View>
      </View>
    </Modal>
  );
};

export default ExampleModal;

//Style for the modal
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  textButtons: {
    color: '#875195',
    fontSize: 20,
  },
  space: {
    marginBottom: 30,
  },
  returnButtonView: {
    fontSize: 20,
    marginTop: 70,
    marginLeft: 20,
    color: '#ffffff',
  },
  iconStyles: {
    marginRight: 10,
    right: 0,
    position: 'absolute',
    color: '#875195',
    fontSize: 25,
    marginTop: '1%',
  },
  imageView: {
    flex: 1,
  },
  image: {
    height: '80%',
    aspectRatio: 1 / 1,
  },
});
