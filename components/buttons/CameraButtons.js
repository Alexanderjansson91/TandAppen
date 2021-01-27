import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


//My header View
const CameraButtons = (props) => {
    const { logoContainer, viewContainer, profilContainer } = styles;
    return (
        <View style={viewContainer}>
                <TouchableOpacity style={styles.profilContainer} onPress={props.click}>
                    <View style={styles.buttonView}>
                        <MatetrialCommunityIcons name={props.icon} color="#875195" size={35} />
                    </View>
                </TouchableOpacity>
        
        </View>
    )
}



//Styles for my header
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },

    profilContainer: {
        height: 50,
        width: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderRadius: 50,
        borderColor: 'white',


    },

    buttonView:{
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',

    },

    textButton: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
    },
  




});

export default CameraButtons;