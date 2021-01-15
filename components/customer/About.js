import React from 'react'
import Header from '../style/Header'
import MainView from '../style/MainView'


import {View,Text,StyleSheet} from 'react-native'

export default function Feed({navigation}) {
    return (
       <View style={styles.topContainer}>
           <Header headerText="Nordic Dental" click={() => navigation.navigate("Login")}></Header>
           <MainView ></MainView>
           <Text>About us</Text>
       </View>
    )
}

const styles = StyleSheet.create({

    topContainer: {
      backgroundColor: '#fff',
      flex: 1,
  
    },
  

  });
