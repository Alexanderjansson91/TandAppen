import React from 'react'
import {Text, View, Button } from 'react-native'
import Header from '../../components/style/Header'
import MainView from '../../components/style/MainView'
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Landing({navigation}) {
    return (

       <View>
           <View>
           <Header headerText="Nordic Dental" click={() => navigation.navigate("Login")} icon="account-circle" ></Header>
           <MainView></MainView>
           </View>
            <Button 
            title="Register"
            
            onPress={() => navigation.navigate("Register")}
            />
            <Button 
            title="Nytt ärende"          
            onPress={() => navigation.navigate("Case")}
            />
       </View>
    )
}
