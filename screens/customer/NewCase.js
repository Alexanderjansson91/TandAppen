import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import ImageModal from '../../components/views/ImageModal';
import ExampleModal from '../../components/views/ExampleModal';
import CameraButton from '../../components/buttons/CameraButtons';
import HeadingTitle from '../../components/text/HeadingText';
import SubTitle from '../../components/text/Subheading';
import ExampleButton from '../../components/buttons/PageButton';

export default function NewCase({ navigation }) {
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [hasGalleryPermission, setGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalExampleOpen, setExampleModalOpen] = useState(false);

  //Hooks for my camera
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  //async handling for take an Image
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };

  //async handling for pick an Image from the gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
      setModalOpen(true);
    }
  };

  //Check if you have permission to the camera
  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasGalleryPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }

  //View for newcase
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {/* Camera view */}
        <Camera
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
          ref={(ref) => setCamera(ref)}
        />
      </View>
      <View style={styles.parent}>
        <CameraButton
          icon="camera-switch"
          click={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        />
        <CameraButton
          icon="camera"
          click={() => { { takePicture() }; { setModalOpen(true) } }} />
        <CameraButton icon="camera-image" click={() => pickImage()} />
      </View>
      {/* Info content */}
      <View style={styles.infoContainer}>
        <View style={styles.HeadlineText}>
          <HeadingTitle Heading="Bild framifrån" />
        </View>
        <SubTitle subHeading="Är du osäker?" />
        <View style={styles.exampleButton}>
          <ExampleButton
            textInfo="Se exempel"
            icon="eye"
            click={() => setExampleModalOpen(true)}
          />
        </View>
      </View>
      {/* Model how willdisplay after take an Image */}
      <Modal visible={modalOpen} animationType="slide">
        <ImageModal
          returnButton="Ta om"
          onClose={() => setModalOpen(false)}
          costumerImage={{ uri: image }}
          nextPage={() =>
            navigation.navigate('SaveCase', { image }, setModalOpen(false))
          }
          nextPageText="Välj"
        />
      </Modal>
      {/* Model how display an example */}
      <Modal visible={modalExampleOpen} animationType="slide">
        <ExampleModal
          icon="close-circle"
          onClose={() => setExampleModalOpen(false)}
          exampleImage={require('../../assets/Alexander.jpg')}
        />
      </Modal>
    </View>
  );
}

//Style for the view
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  HeadlineText: {
    marginBottom: '0%',
  },
  cameraContainer: {
    flex: 1.7,
    flexDirection: 'row',
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  parent: {
    flex: 0.5,
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1.2,
  },
  exampleButton: {
    margin: 10,
  },
});
