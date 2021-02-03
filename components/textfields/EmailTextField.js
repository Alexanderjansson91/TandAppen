import React, {useRef} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';




//Email Textfield
const EmailTextField = (props)=> {
    const {viewContainer,textInput} = styles;

    return(
        <View style={viewContainer}>
            <TextInput placeholder={props.placeHolder}
             onChangeText={props.onChange}
             style={textInput}     
             ></TextInput>
        </View>      
    )
}

//Styles for Email Textfield
const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor: '#ffffff',
        height:40,
        borderStyle:'solid',   
        borderBottomWidth:1,
        borderColor:"#875195",
        width:300,
        textAlign:'center',
        alignSelf:'center',
        marginTop:20,
        marginBottom:10,
    },  
    textInput:{
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft:6,
        alignItems:'center',
        fontWeight:"600",
        color:'black',
        fontSize:17,
    },
});

export default EmailTextField;

