import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {StyleSheet} from 'react-native'

import LandingScreen from '../screens/customer/Landing'
import InfoCaseScreen from '../screens/customer/InfoCase'
import AboutUsScreen from '../screens/customer/About'
import { event } from 'react-native-reanimated';


const Tab = createMaterialBottomTabNavigator();


const EmptyScreen = () => {
    return(null)
}

export class MainCustomer extends Component {
  
    render() {            

        return (
            
            <Tab.Navigator barStyle={{ backgroundColor: '#875195' }}
            initialRouteName="Landing" labeled={false}>

                <Tab.Screen  name="Landing" component={LandingScreen}
                options={{
                    tabBarIcon:({color, size}) => (
                        <MatetrialCommunityIcons name="home" color={color} size={26}/>
                    ),
        
                }} />
                <Tab.Screen name="Case" component={InfoCaseScreen}
    
                options={{
                    tabBarIcon:({color, size}) => (
                        
                        <MatetrialCommunityIcons name="plus-box" color={color} size={26}/>
                    ),
                }} />
                <Tab.Screen name="About" component={AboutUsScreen}
                options={{
                
                    tabBarIcon:({color, size}) => (
                        <MatetrialCommunityIcons name="information" color={color} size={26}/>
                    ),
                }} />

            </Tab.Navigator>

        )
    }
}

//Styles for my header
const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor:"black"
    }

});



export default MainCustomer