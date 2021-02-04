import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

import { Provider } from 'react-redux';
/*import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../redux/reducers';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk));*/
import reduxStore from '../redux/store/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../navigation/Main';
import MainScreenCostumer from '../navigation/MainCustomer';
import LoginScreen from '../screens/auth/Login';
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
  //Check if user is signed in
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
  //Navigation stack for Costumer pages
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#875195" />
        </View>
      );
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={MainScreenCostumer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerBackTitle: 'Hem',
                headerStyle: { backgroundColor: '#875195' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name="Case"
              component={InfoCaseScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewCase"
              component={NewCaseScreen}
              options={{
                headerTitle: 'Bild',
                headerBackTitle: 'Hem',
                headerStyle: { backgroundColor: '#875195' },
                headerTintColor: 'white',
              }}
              navigation={this.props.navigation}
            />
            <Stack.Screen
              name="SaveCase"
              component={SaveCaseScreen}
              options={{
                headerTitle: 'Kontaktuppgifter',
                headerStyle: { backgroundColor: '#875195' },
                headerTintColor: 'white',
              }}
              navigation={this.props.navigation}
            />
            <Stack.Screen
              name="About"
              component={SaveCaseScreen}
              navigation={this.props.navigation}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    //Navigation stack for Coworkers
    return (
      <Provider store={reduxStore}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default MainNavigation;

//Styles for my checkList Array
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});
