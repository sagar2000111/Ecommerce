// ManagePropertyTabs.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RentScreen from './RentScreen';
import DepositScreen from './DepositScreen';
import OtherScreen from './OtherScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const ManagePropertyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'home';

          if (route.name === 'Rent') {
            iconName = 'cash';
          } else if (route.name === 'Deposit') {
            iconName = 'wallet';
          } else if (route.name === 'Others') {
            iconName = 'ellipsis-horizontal-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Rent" component={RentScreen} />
      <Tab.Screen name="Deposit" component={DepositScreen} />
      <Tab.Screen name="Others" component={OtherScreen} />
    </Tab.Navigator>
  );
};

export default ManagePropertyTabs;
