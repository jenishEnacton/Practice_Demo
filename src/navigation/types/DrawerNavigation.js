import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerNav} from '../StackNavigationKeys';
import {DrawerRoute} from '../NavigationRoutes';

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerInactiveBackgroundColor: '#F5FCF7',
        drawerActiveBackgroundColor: '#397848',
        drawerActiveTintColor: '#F5FCF7',
        drawerInactiveTintColor: '#212622',
        drawerLabelStyle: {
          fontSize: 15,
        },
        drawerStyle: {
          backgroundColor: '#212622',
          width: 200,
        },
        drawerType: 'back',
        headerStyle: {
          backgroundColor: '#397848',
        },
        headerTitleStyle: {
          color: '#F5FCF7',
        },
        headerTintColor: '#F5FCF7',
        drawerContentContainerStyle: {
          width: 200,
        },
      }}>
      <Drawer.Screen
        options={{
          drawerLabel: 'Home Screen',
        }}
        name={DrawerNav.Home}
        component={DrawerRoute.Home}
      />
      <Drawer.Screen
        options={{
          drawerLabel: 'Favourite Screen',
        }}
        name={DrawerNav.Favourite}
        component={DrawerRoute.Favourite}
      />
    </Drawer.Navigator>
  );
}
