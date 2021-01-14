import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {View,Text} from 'react-native'

import LandingScreen from './components/auth/Landing'
import NewCaseScreen from './components/auth/NewCase'
import AboutUsScreen from './components/auth/About'
import { event } from 'react-native-reanimated';


const Tab = createMaterialBottomTabNavigator();


const EmptyScreen = () => {
    return(null)
}

export class MainCustomer extends Component {
  
    render() {            
  
        return (
            <Tab.Navigator initialRouteName="Landing" labeled={false}>
                <Tab.Screen name="Feed" component={LandingScreen}
                options={{
                    tabBarIcon:({color, size}) => (
                        <MatetrialCommunityIcons name="home" color={color} size={26}/>
                    ),
                }} />
                <Tab.Screen name="AddContainer" component={EmptyScreen}
                listeners={({ navigation }) =>   ({
                    tabPress:event =>{
                        event.preventDefault();
                        navigation.navigate("Case")
                    }
                })}
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

export default MainCustomer