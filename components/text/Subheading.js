import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//subheading text that I use in the app
const Subheading = (props)=> {
    const {viewContainer,headingText} = styles;
    return(
        <View style={viewContainer}>
                <Text style={headingText}>{props.subHeading}</Text>        
        </View>      
    )
}

//Styles for my subheading text
const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor: '#ffffff',
        height:70,
        
      
    },  
    headingText:{
        textAlign:'center',
        color:'#875195',
        fontSize:20,
        margin:10
    },
});

export default Subheading;