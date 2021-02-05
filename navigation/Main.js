import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MatetrialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchUserPosts, clearData } from '../redux/actions/index';

import FeedScreen from '../screens/main/Feed';
import ProfileScreen from '../screens/main/Profile';

const Tab = createMaterialBottomTabNavigator();

//TabScreen for the coworkers
export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.clearData();
    this.props.fetchUserPosts();
  }
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        labeled={false}
        barStyle={{ backgroundColor: '#875195' }}
      >
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MatetrialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MatetrialCommunityIcons
                name="account-circle"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

//Access the store states from redux
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

//Bind the components to redux
const mapDispatchProps = (dispatch) =>
  bindActionCreators(
    {
      fetchUser,
      fetchUserPosts,
      clearData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchProps)(Main);
