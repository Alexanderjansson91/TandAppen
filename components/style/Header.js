import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


//My header View
const Header = (props) => {
    const { logoContainer, viewContainer, profilContainer, parent } = styles;
    return (
        <View style={viewContainer}>
            <View style={styles.parent}>
                <Text style={logoContainer}>
                    {props.headerText}
                </Text>
                <TouchableOpacity style={styles.profilContainer} onPress={props.click}>
                    <View>
                    <MatetrialCommunityIcons name="account-circle" color="white" size={26}/>
                    </View>
                </TouchableOpacity>       
                
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