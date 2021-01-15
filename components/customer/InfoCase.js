import React from 'react'
import Header from '../style/Header'
import MainView from '../style/MainView'


import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

export default function InfoCase({navigation}) {
    return (
       <View style={styles.topContainer}>
           <Header headerText="Nordic Dental" click=""></Header>
           <MainView ></MainView>
           <Text>Nytt ärende</Text>
           <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("NewCase")}
      >
        <Text>Starta</Text>
      </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({

    topContainer: {
      backgroundColor: '#fff',
      flex: 1,
  
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
  

  });
