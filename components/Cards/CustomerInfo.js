import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


//Card how display the info from the costumer
const CustomerInfo = (props)=> {
    const {viewContainer,infoText,space,parent} = styles;
    return(
        <View style={viewContainer}>
            <View style={styles.space}></View>
                
                {/* Image and Textfields how print the info */}
                 <Image style={styles.image}  source={props.ImageCustomer}/>  
                 <View style={styles.space}></View> 
                 <View style={styles.parent}>
                <MatetrialCommunityIcons name={props.iconName} color="black" size={26}/> 
                <Text style={infoText}>{props.costumerName}</Text>
                </View>  
                <View style={styles.parent}>
                <MatetrialCommunityIcons name={props.iconEmail} color="black" size={26}/> 
                <Text style={infoText}>{props.costumerEmail}</Text> 
                </View>
                <View style={styles.parent}>
                <MatetrialCommunityIcons name={props.iconPhone} color="black" size={26}/> 
                <Text style={infoText}>{props.costumerPhone}</Text>  
                </View>
                <View style={styles.parent}>
                <MatetrialCommunityIcons name={props.iconMessage} color="black" size={26}/> 
                <Text style={infoText}>{props.costumerMessage}</Text>    
                </View>
                <View style={styles.parent}>
                <MatetrialCommunityIcons name={props.iconYear} color="black" size={26}/> 
                <Text style={infoText}>{props.costumerYear}</Text>    
                </View>
        </View>      
    )
}

//Styles for my header
const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor: '#ffffff',
        height:600,
    },  
    space:{
       marginTop:20,
    }, 
    infoText:{
        marginLeft:10,
        color:'#875195',
        fontSize:20,
        margin:10
    },
    parent: {
        flexDirection: 'row',   
      }, 
      image:{
        flex:1,
        aspectRatio:1/1
    },
});

export default CustomerInfo;