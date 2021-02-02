import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


//My header View
const Counter = (props)=> {
    const {viewContainer,infoText,space,parent,welcomeNameUser,container} = styles;
    return (
        
            <View style={container}>
      <View style={styles.parent}>    

        <TouchableOpacity style={styles.profilContainer} onPress={props.counterMinusClick}>
                    <View style={styles.buttonView}>
                        <Text style={styles.textButton}>{props.minusText}</Text>
                        <MatetrialCommunityIcons name={props.iconMinus} color="#875195" size={26} />
                    </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profilContainer} onPress={props.counterPlusClick}>
                    <View style={styles.buttonView}>
                        <Text  style={styles.textButton}>{props.plusText}</Text>
                        <MatetrialCommunityIcons name={props.iconPlus} color="#875195" size={26} />
                    </View>
        </TouchableOpacity>

        
         <Text onChangeText={props.changeText}
         style={styles.responseCounterNumber}>{props.numberOfYearText}
         </Text> 
         <Text  style={styles.responseCounterText}>{props.yearText}</Text> 
       
        </View>
        </View>
    );
}

//Styles for my header
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        height: 50,
    },
    responseCounterText:{
        alignItems: 'center',
        
        alignSelf: 'center',
        color: '#875195',
        fontWeight: '500',
        fontSize: 25,
    },
    responseCounterNumber:{
        alignItems: 'center',
        marginLeft:'10%',
        alignSelf: 'center',
        color: '#875195',
        fontWeight: '500',
        fontSize: 30,
    },

    profilContainer: {
        
        
        width: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderStyle: 'solid',
        textAlign:'center',
        borderColor: 'white',


    },

    buttonView:{
    
        flexDirection: 'row', 
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign:'center'
    },

    textButton: {
        color: '#875195',
        fontWeight: '500',
        fontSize: 18,
    },
   
    parent: {
        flexDirection: 'row',
      },
});

export default Counter;