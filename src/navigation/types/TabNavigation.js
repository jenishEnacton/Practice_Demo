import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNav} from '../StackNavigationKeys';
import {TabRoute} from '../NavigationRoutes';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 70},
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name={TabNav.Home}
        component={TabRoute.Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo
              name="home"
              size={30}
              style={{
                color: !focused ? '#201E43' : '#EF5A6F',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Favourite}
        component={TabRoute.Favourite}
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo
              name="heart"
              size={30}
              style={{
                color: !focused ? '#201E43' : '#EF5A6F',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Profile}
        component={TabRoute.Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person"
              size={30}
              style={{
                color: !focused ? '#201E43' : '#EF5A6F',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
