// ManagePropertyTabs.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/FontAwesome5';
import PnL from './PnL';
import ARPU from './ARPU';
import EARNINGS from './EARNINGS';

const Tab = createBottomTabNavigator();

const OccupancyPnLTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'home';

          if (route.name === 'PnL') {
            iconName = 'star';
          } else if (route.name === 'ARPU') {
            iconName = 'people-carry';
          } else if (route.name === 'EARNINGS') {
            iconName = 'money-bill';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="PnL" component={PnL} />
      <Tab.Screen name="ARPU" component={ARPU} />
      <Tab.Screen name="EARNINGS" component={EARNINGS} />
    </Tab.Navigator>
  );
};

export default OccupancyPnLTabs;
