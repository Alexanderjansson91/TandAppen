import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



//My header View
const CheckListArray = (props) => {

    const iconArray = <MatetrialCommunityIcons name="check-circle" color="#875195" size={26}/>
    const {viewContainer} = styles;


    const array = [
        { item: ' Bra ljus i rummet.', icon: iconArray   },
        { item: ' Bra vinkel', icon: iconArray  },
        { item: ' Vit bakrund', icon: iconArray  },
        { item: ' Osäker, se exempel på respektive sida',icon: iconArray  },
      ]

   
    //const [,, { item }] = array.fill(setNewColor()); 

     const [,, { item }] = array; 

     const setNewColor = () => {
     <Text style={{ color: 'red' }}>{item}</Text>
        return item
    }

//Select color for discount product if the price is over 50 €
function setNewColorasd(){
    if (item) {
      return false
    }
    else {
      return true
    }
  }



    return (
        <View style={viewContainer}>
          <FlatList style={styles.checkFlatList}
          data={Object.keys(array)}
          renderItem={({ item }) => 
              <Text style={styles.flatListText}>
              {array[item].icon}{array[item].item}
              {setNewColor()}
              </Text>}
          />
        </View>
    )
}



//Styles for my checkList Array    
const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor: '#ffffff',
        height:400,
    },
    checkFlatList:{
        
        alignSelf:'center',
        
        alignContent:'center',
        marginTop:30,
    },
    flatListText: {
        margin:20,
        
        fontSize:20,
    }

    
});

export default CheckListArray;