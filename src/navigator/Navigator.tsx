import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ManagePropertyTabs from '../screens/ManageProperty/ManagePropertyTabs';
import ManageTenureTabs from '../screens/ManageTenure/ManageTenureTabs';
import ExitRequestTabs from '../screens/ExitRequest/ExitRequestTabs';
import TenantBookingsTabs from '../screens/TenantBookings/TenantBookingsTabs';
import OccupancyPnLTabs from '../screens/OccupancyPnL/OccupancyPnLTabs';
const Tab = createBottomTabNavigator();
const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManagePropertyTabs"
          component={ManagePropertyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageTenureTabs"
          component={ManageTenureTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ExitRequestTabs"
          component={ExitRequestTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TenantBookingsTabs"
          component={TenantBookingsTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OccupancyPnLTabs"
          component={OccupancyPnLTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
