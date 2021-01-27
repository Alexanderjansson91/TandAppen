import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Modal, Alert, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import ImageModal from '../../components/style/ImageModal'
import CameraButton from '../../components/buttons/CameraButtons'


export default function NewCase({ navigation }) {
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [hasGalleryPermission, setGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [open, setOpen] = useState(false)

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
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
          ref={ref => setCamera(ref)}
        />
      </View>
      <View style={styles.parent}>

        <CameraButton icon="camera-switch-outline" click={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}></CameraButton>
        <CameraButton
          icon="camera-plus"
          click={() => { takePicture(); setOpen(true); }} />
        <CameraButton
          icon="camera-image"
          click={() => { () => pickImage() }} />

      </View>
      <Button style={{ margin: 20 }} title="Spara" onPress={() => navigation.navigate('SaveCase', { image })} />
      {image && <Image source={{ uri: image }} style={{ flex: 1, }} />}
    </View>
  );
}

const styles = StyleSheet.create({

  cameraContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
  }


})