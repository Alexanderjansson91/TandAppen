import React from 'react'
import Header from '../../components/style/Header'
import MainView from '../../components/style/MainView'


import {View,Text,StyleSheet} from 'react-native'

export default function Feed({navigation}) {
    return (
       <View style={styles.topContainer}>
           <Header headerText="Nordic Dental" click={() => navigation.navigate("Login")} icon="account-circle" ></Header>
           <MainView></MainView>
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
