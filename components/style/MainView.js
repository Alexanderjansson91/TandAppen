import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//My header View
const MainView = (props)=> {
    const {container} = styles;
    return(
        <View style={container}>
                <Text>{props.Textinfo}</Text>
           
        </View> 
        
       
    )
}

//Styles for my header
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        height:50,
        marginTop:-50
      },

});

export default MainView;