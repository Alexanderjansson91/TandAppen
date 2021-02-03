import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

import { Provider } from 'react-redux';
/*import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../redux/reducers';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk));*/
import reduxStore from '../redux/store/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../navigation/Main';
import MainScreenCostumer from '../navigation/MainCustomer';
import SaveScreen from '../screens/main/Save';
import AddScreen from '../screens/main/Add';
import LoginScreen from '../screens/auth/Login';
import RegisterScreen from '../screens/auth//Register';
import InfoCaseScreen from '../screens/customer/InfoCase';
import SaveCaseScreen from '../screens/customer/SaveCase';
import NewCaseScreen from '../screens/customer/NewCase';

const Stack = createStackNavigator();

export class MainNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={styles.Loading}>
          <Text>Laddar</Text>
        </View>
      );
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={MainScreenCostumer}
              options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen}
              options={{
                headerBackTitle: 'Hem',
                headerStyle: { backgroundColor: '#875195' },
                headerTintColor: 'white',
              }} />
            <Stack.Screen name="Case" component={InfoCaseScreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="NewCase" component={NewCaseScreen}
              options={{
                headerTitle: 'Bild',
                headerBackTitle: 'Hem',
                headerStyle: { backgroundColor: '#875195' },
                headerTintColor: 'white',
              }}
              navigation={this.props.navigation} />
            <Stack.Screen name="SaveCase" component={SaveCaseScreen}
              options={{
                headerTitle: 'Kontakt Uppgifter',
                headerStyle: { backgroundColor: '#875195' },
                headerTintColor: 'white',
              }}
              navigation={this.props.navigation} />
            <Stack.Screen name="About" component={SaveCaseScreen} navigation={this.props.navigation} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={reduxStore}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Main" component={MainScreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="Add" component={AddScreen} navigation={this.props.navigation} />
            <Stack.Screen name="Save" component={SaveScreen} navigation={this.props.navigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default MainNavigation;

//Styles for my checkList Array
const styles = StyleSheet.create({
  Loading: {
    flex: 1,
    justifyContent: 'center',
  },
});