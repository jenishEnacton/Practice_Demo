import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {DrawerNav, StackNav} from '../StackNavigationKeys';
import {DrawerRoute, StackRoute} from '../NavigationRoutes';
import {Image, Text, View} from 'react-native';
import images from '../../assets/images';

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();

  const DrawerHeaderContent = props => {
    return (
      <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#4f4f4f',
            height: 100,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            top: -5,
            flexDirection: 'row',
          }}>
          <Image
            source={images.profile}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              resizeMode: 'contain',
            }}
          />
          <Text style={{color: '#fff'}}>User Profile</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={DrawerHeaderContent}
      screenOptions={{
        // headerShown: false,
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
          drawerLabel: 'Home',
        }}
        name={StackNav.TabNavigation}
        component={StackRoute.TabNavigation}
      />
      <Drawer.Screen
        options={{
          drawerLabel: 'User Detail',
        }}
        name={DrawerNav.UserDetail}
        component={DrawerRoute.UserDetail}
      />
      <Drawer.Screen
        options={{
          drawerLabel: 'Add User',
        }}
        name={DrawerNav.AddUser}
        component={DrawerRoute.AddUser}
      />
    </Drawer.Navigator>
  );
}
