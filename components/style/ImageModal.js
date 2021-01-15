import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Modal } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


//My header View
const ImageModal = (props) => {
    const [modalVisible, setModalVisible] = useState(false);



    const { logoContainer, viewContainer, profilContainer, parent } = styles;
    return (
        <View style={viewContainer}>
            <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
          </View>
          <TouchableOpacity style={styles.profilContainer} onPress={props.onClose}>
                    <View>
                    <Text>close</Text>
                    </View>
                </TouchableOpacity>       
        </View>
      </Modal>
        </View>
    )
}

//Styles for my header
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
 
});

export default ImageModal;