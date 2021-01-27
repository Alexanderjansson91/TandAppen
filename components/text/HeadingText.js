import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//My header View
const HeadingText = (props)=> {
    const {viewContainer,headingText} = styles;
    return(
        <View style={viewContainer}>
                <Text style={headingText}>{props.Heading}</Text>        
        </View>      
    )
}

//Styles for my header
const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor: '#ffffff',
        height:75,
        marginLeft:"5%",
        marginRight:"5%",
    },  
    headingText:{
        textAlign:'center',
        fontWeight:"600",
        color:'#875195',
        fontSize:25,
    },
});

export default HeadingText;