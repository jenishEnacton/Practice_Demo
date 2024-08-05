import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {TopTabNav} from '../StackNavigationKeys';
import {TopTabRoute} from '../NavigationRoutes';

export default function TopTabNavigation() {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 20,
          color: '#212622',
          fontWeight: '500',
          textTransform: 'none',
        },
        tabBarStyle: {
          backgroundColor: '#F5FCF7',
          elevation: 5,
          shadowOpacity: 5,
          borderBottomWidth: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#397848',
        },
      }}>
      <TopTab.Screen name={TopTabNav.TopTab1} component={TopTabRoute.TopTab1} />
      <TopTab.Screen name={TopTabNav.TopTab2} component={TopTabRoute.TopTab2} />
    </TopTab.Navigator>
  );
}
