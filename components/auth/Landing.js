import React from 'react'
import {Text, View, Button } from 'react-native'


export default function Landing({navigation}) {
    return (
        
       <View style={{flex:1, justifyContent:'center'}}>
            <Button 
            title="Register"
            onPress={() => navigation.navigate("Register")}
            />
             <Button 
            title="Logga in"
            onPress={() => navigation.navigate("Login")}
            />
            <Button 
            title="Nytt ärende"
            onPress={() => navigation.navigate("Case")}
            />
       </View>
    )
}
