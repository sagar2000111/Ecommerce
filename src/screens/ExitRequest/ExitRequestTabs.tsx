// ManagePropertyTabs.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import Pending from './Pending';
import ToVacate from './ToVacate';
import ExitInspection from './ExitInspection';

const Tab = createBottomTabNavigator();

const ExitRequestTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'home';

          if (route.name === 'Pending') {
            iconName = 'pending-actions';
          } else if (route.name === 'ToVacate') {
            iconName = 'wallet';
          } else if (route.name === 'ExitInspection') {
            iconName = 'exit-to-app';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Pending" component={Pending} />
      <Tab.Screen name="ToVacate" component={ToVacate} />
      <Tab.Screen name="ExitInspection" component={ExitInspection} />
    </Tab.Navigator>
  );
};

export default ExitRequestTabs;
