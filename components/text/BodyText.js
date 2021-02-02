import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//My header View
const Subheading = (props)=> {
    const {viewContainer,headingText} = styles;
    return(
        <View style={viewContainer}>

                <Text style={headingText}>{props.bodyText}</Text>        
        </View>      
    )
}

//Styles for my header
const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor: '#ffffff',
        height:"60%",
        
      
    },  
    headingText:{
        marginLeft:20,
        marginRight:20,
        color:'#875195',
        fontSize:20,
        margin:10
    },
});

export default Subheading;