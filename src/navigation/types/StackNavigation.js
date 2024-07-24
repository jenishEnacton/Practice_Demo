import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StackRoute} from '../NavigationRoutes';
import {StackNav} from '../StackNavigationKeys';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={StackNav.Splash}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={StackNav.Splash} component={StackRoute.Splash} />
      <Stack.Screen name={StackNav.Screen1} component={StackRoute.Screen1} />
      <Stack.Screen name={StackNav.Screen2} component={StackRoute.Screen2} />
      <Stack.Screen name={StackNav.Screen3} component={StackRoute.Screen3} />
      <Stack.Screen name={StackNav.RScreen1} component={StackRoute.RScreen1} />
      <Stack.Screen
        name={StackNav.TabNavigation}
        component={StackRoute.TabNavigation}
      />
      <Stack.Screen
        name={StackNav.DrawerNavigation}
        component={StackRoute.DrawerNavigation}
      />
    </Stack.Navigator>
  );
}
