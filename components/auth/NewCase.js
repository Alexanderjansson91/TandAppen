import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function NewCase({navigation}) {
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [hasGalleryPermission, setGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus= await Camera.requestPermissionsAsync();
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
    <View style={{flex: 1}}>
    <View style={styles.cameraContainer}>
      <Camera 
      style={styles.fixedRatio} 
      type={type} 
      ratio={'1:1'} 
      ref= {ref => setCamera(ref)}
      />
    </View>
    <Button
            title="Byt Kamera vinkel"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
           
          </Button>

          <Button style={{margin:20}} title="Ta Bild" onPress= {() => takePicture()}/>
          <Button style={{margin:20}} title="Välj Bild" onPress= {() => pickImage()}/>
          <Button style={{margin:20}} title="Spara" onPress= {() => navigation.navigate('SaveCase', {image})}/>


          {image && <Image source= {{uri: image}} style= {{flex:1, }}   />}

          </View>
  );
}

const styles = StyleSheet.create({

  cameraContainer:{
    flex:1,
    flexDirection:'row'
  },
  fixedRatio:{
    flex:1,
    aspectRatio: 1
  }

})