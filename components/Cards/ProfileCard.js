import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


//My header View
const ProfileCard = (props)=> {
    const {viewContainer,infoText,space,parent,welcomeNameUser} = styles;
    return(
        <View style={viewContainer}>
            <View style={styles.space}></View>   
              
                 <View style={styles.space}></View> 
                 <View style={styles.parent}>
                <MatetrialCommunityIcons name={props.iconName} color="black" size={26}/> 
                <Text style={infoText}>{props.costumerName}</Text>
                </View>  
                <View style={styles.ImageView}>
                <Image style={styles.image}  source={props.imageUri} />
                </View>
                <View style={styles.parent}>
                <MatetrialCommunityIcons name={props.iconEmail} color="black" size={26}/> 
                <Text style={infoText}>{props.costumerEmail}</Text> 
               
                </View>
        </View>      
    )
}

//Styles for my header
const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor: '#ffffff',
        height:200,
        marginBottom:150,
        borderBottomWidth:1,
        borderStyle:'solid'
    },  
    space:{
       marginTop:20,
    }, 
    infoText:{
        
        color:'#875195',
        fontSize:20,
        margin:10,
        marginTop:0
    },
    welcomeNameUser:{
        color:'#875195',
        fontSize:20,
        marginTop:0
    },
    parent: {
        flexDirection: 'row',   
      }, 
      image:{
        flex:1,
        flex: 1,
        aspectRatio:1,
        resizeMode: 'contain',
        borderRadius:80,
        borderStyle:'solid',
        borderWidth:1
    },
    ImageView:{
        width: 100,
        height: 100,
        justifyContent:'center',
        marginTop:10,
        marginBottom:0,
        textAlignVertical:'center',
        position: 'absolute',
        right: 0,

        
        
    }
});

export default ProfileCard;