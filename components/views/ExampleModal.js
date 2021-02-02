import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TitleText from '../../components/text/HeadingText'


const ExampleModal = ({ onClose, closeExampleButton, exampleImage,modalExampleOpen }) => {
  const { container, modalToggle, modalClose, imageStyle } = styles;
  return (
    <Modal visible={modalExampleOpen}  animationType='slide'>
      <View style={container}>
           {/* Button number 1*/}
          <TouchableOpacity style={styles.returnButtonView} onPress={onClose} >
            <View >
              <Text style={styles.textButtons}>{closeExampleButton}</Text>
            </View>
          </TouchableOpacity>
      
        
        <View style={styles.space} />

        <TitleText Heading="Exempelbild" />
      
       <View style={styles.imageView}>
        <Image style={styles.image} source={exampleImage} />
        </View>
      </View>
    </Modal>
 
  );

}

export default ExampleModal;

const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    alignContent:'center',
    alignSelf:'center',
    backgroundColor: 'white'
  },
  textButtons:{
    color: '#875195',
    fontSize: 20,
  },
  space: {
    marginBottom:30,
   },
  returnButtonView: {
    fontSize:20,
    marginTop: 70, 
    marginLeft: 20,
    color:"#ffffff",
   
  },


  imageView:{
    flex:1,
    
  },

  image:{
    height:"80%"
},
})