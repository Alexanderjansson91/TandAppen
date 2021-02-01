import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, Button} from'react-native';
import * as firebase from 'firebase'

import { Provider }  from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))
import AddScreen from './screens/main/Add'
import SaveScreen from './screens/main/Save'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './screens/customer/Landing'
import InfoCaseScreen from './screens/customer/InfoCase'
import RegisterScreen from './screens/auth/Register'
import LoginScreen from './screens/auth/Login'
import SaveCaseScreen from './screens/customer/SaveCase'
import NewCaseScreen from './screens/customer/NewCase'
import { TouchableWithoutFeedbackBase } from 'react-native';
import MainScreen from './Main'
import MainScreenCostumer from './MainCustomer'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALnRSDP24y45XNf1-gqNFaS0vFNZ_nBWM",
  authDomain: "tandappen-80969.firebaseapp.com",
  projectId: "tandappen-80969",
  storageBucket: "tandappen-80969.appspot.com",
  messagingSenderId: "888373589985",
  appId: "1:888373589985:web:2b063baf3e09ddd52404a0",
  measurementId: "G-ZFL204L6NY"
};

if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();


export class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    loaded : false,
  }
}

componentDidMount(){
  firebase.auth().onAuthStateChanged((user) => {
    if(!user){
      this.setState({
        loggedIn:false,
        loaded:true, 
      })
    }else{
      this.setState({
        loggedIn:true ,
        loaded:true, 
      })
    }
  })
}
  
render() {
  const { loggedIn, loaded} = this.state
  if (!loaded){
    return(
      <View style={{flex:1, justifyContent:'center'}}>
        <Text>Loading</Text>
      </View>
    )
  }

  

  if(!loggedIn){
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={MainScreenCostumer} 
        options= {{headerShown:false, backButtonTintColor: '#ffffff',}}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Case" component={InfoCaseScreen} options={{headerShown: false}}/>
        <Stack.Screen name="NewCase" component={NewCaseScreen} navigation={this.props.navigation} />
        <Stack.Screen name="SaveCase" component={SaveCaseScreen} navigation={this.props.navigation} />
        <Stack.Screen name="About" component={SaveCaseScreen} navigation={this.props.navigation} />
      </Stack.Navigator>
    </NavigationContainer>
       );
    }

    return(
      <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Main" component={MainScreen} 
        options= {{headerShown:false}}/>
        <Stack.Screen name="Add" component={AddScreen} navigation={this.props.navigation} />
        <Stack.Screen name="Save" component={SaveScreen} navigation={this.props.navigation} />
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
  }
}

export default App
