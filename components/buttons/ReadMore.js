import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


//My header View
const PageButton = (props) => {
    const { logoContainer, viewContainer, profilContainer, parent } = styles;
    return (
        <View style={viewContainer}>
            <View style={parent}>
                <TouchableOpacity style={styles.profilContainer} onPress={props.click}>
                    <View style={styles.buttonView}>
                        <Text style={styles.textButton}>{props.textInfo}{props.icon}</Text>
                        <MatetrialCommunityIcons name={props.icon} color="#EFA600" size={26} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}



//Styles for my header
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },

    profilContainer: {
        backgroundColor: '#875195',
        height: 50,
        width: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderRadius: 30,
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

export default PageButton;