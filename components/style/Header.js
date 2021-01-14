import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//My header View
const Header = (props)=> {
    const {logoContainer, viewContainer, profilContainer, parent} = styles;
    return(
        <View style={viewContainer}>
            <View style={styles.parent}>
            <Text style={logoContainer}>
                {props.headerText}
            </Text>
            <Text style={profilContainer}>
                {props.infoText}
            </Text>
            </View>
        </View>
    )
}

//Styles for my header
const styles = StyleSheet.create({
    viewContainer:{
       backgroundColor: '#875195',
       height:150
    },
    logoContainer:{
        fontSize:20,
        marginTop: 50, 
        marginLeft: 20,
        color:"#ffffff",
        flexDirection:"row",
    },
    profilContainer:{
        fontSize:20,
        marginTop: 50, 
        marginRight: 20,
        color:"#ffffff",
        marginBottom: 40, 
        flexDirection:"row",
        position: 'absolute',
        right: 0
    },
    parent: {
        flex: 1,
        flexDirection: 'row',   
      }

});

export default Header;