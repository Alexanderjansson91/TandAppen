import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Modal, Alert, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import ImageModal from '../../components/views/ImageModal'
import ExampleModal from '../../components/views/ExampleModal'
import CameraButton from '../../components/buttons/CameraButtons'
import HeadingTitle from '../../components/text/HeadingText'
import SubTitle from '../../components/text/Subheading'
import ExampleButton from '../../components/buttons/PageButton'


export default function NewCase({ navigation }) {
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [hasGalleryPermission, setGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalExampleOpen, setExampleModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission(galleryStatus.status === 'granted');

    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri)
    }
  }


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
    }
  };

  if (hasCameraPermission === null || hasGalleryPermission == false) {
    return <View />;
  }
  if (hasGalleryPermission === false || hasGalleryPermission == false) {
    return <Text>No access to camera</Text>;
  }


  return (

    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
          ref={ref => setCamera(ref)}
        />
      </View>
      <View style={styles.parent}>

        <CameraButton icon="camera-switch" click={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}/>
        <CameraButton
          icon="camera"
          click={() => { { takePicture() }; { setModalOpen(true) } }} />
        <CameraButton
          icon="camera-image"
          click={() => pickImage()} />  
          
       {/* <Button style={{ margin: 20 }} title="Spara" onPress={() => navigation.navigate('SaveCase', { image })} />*/}

      </View>
      <View style={styles.infoContainer}>
      <View style={styles.HeadlineText}>
      <HeadingTitle Heading="Bild framifrån"/>
      </View>
      <SubTitle subHeading="Är du osäker?"/>
      <View style={styles.exampleButton}>
      <ExampleButton textInfo="Se exempel" click={() => setExampleModalOpen(true)}/>
      </View>
      </View>
      <Modal visible={modalOpen} animationType='slide' >
        <ImageModal
          returnButton="Ta om"
          onClose={() => setModalOpen(false)}
          costumerImage={{ uri: image }}
          nextPage={ () => navigation.navigate('SaveCase', { image }, setModalOpen(false) ) } 
          nextPageText="Välj"   
        />
      </Modal>
      <Modal visible={modalExampleOpen} animationType='slide' >
        <ExampleModal
          icon="close-circle"
          onClose={() => setExampleModalOpen(false)}
          exampleImage={require("../../assets/teeth.jpg")} 
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    backgroundColor:"#ffffff",
    flex:1,

  },

  HeadlineText:{
    marginBottom:"0%",
  },

  cameraContainer: {
    flex: 1.7,
    flexDirection: 'row'
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },
  parent: {
    flex:0.5,
    flexDirection: 'row',
  },
  infoContainer:{
    flex:1.2,
  },
  exampleButton:{
    margin:10
  }


})            /*click={() => { {takePicture()}; {setModalOpen(true)}}} />*/
