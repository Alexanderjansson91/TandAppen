import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//My header View
const Subheading = (props)=> {
    const {viewContainer,headingText} = styles;
    return(
        <View style={viewContainer}>
                <Text style={headingText}>{props.subHeading}</Text>        
        </View>      
    )
}

//Styles for my header
const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor: '#ffffff',
        height:40,
      
    },  
    headingText:{
        textAlign:'center',
        color:'#875195',
        fontSize:20,
    },
});

export default Subheading;