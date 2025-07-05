// ManagePropertyTabs.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Bed from './Bed';
import Room from './Room';
import Property from './Property';

const Tab = createBottomTabNavigator();

const TenantBookingsTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'home';

          if (route.name === 'Bed') {
            iconName = 'bed-sharp';
          } else if (route.name === 'Room') {
            iconName = 'document-text-sharp';
          } else if (route.name === 'Property') {
            iconName = 'ellipsis-horizontal-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Bed" component={Bed} />
      <Tab.Screen name="Room" component={Room} />
      <Tab.Screen name="Property" component={Property} />
    </Tab.Navigator>
  );
};

export default TenantBookingsTabs;
