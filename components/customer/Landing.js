import React from 'react'
import {Text, View, Button } from 'react-native'
import Header from '../style/Header'
import MainView from '../style/MainView'


export default function Landing({navigation}) {
    return (

       <View>
           <View>
           <Header headerText="Nordic Dental" click={() => navigation.navigate("Login")}></Header>
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
