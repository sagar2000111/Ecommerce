// ManagePropertyTabs.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Tenure from './Tenure';
import AgreementScreen from './AgreementScreen';
import Other from './Other';

const Tab = createBottomTabNavigator();

const ManageTenureTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'home';

          if (route.name === 'Tenure') {
            iconName = 'bed-sharp';
          } else if (route.name === 'Agreement') {
            iconName = 'document-text-sharp';
          } else if (route.name === 'Others') {
            iconName = 'ellipsis-horizontal-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Tenure" component={Tenure} />
      <Tab.Screen name="Agreement" component={AgreementScreen} />
      <Tab.Screen name="Others" component={Other} />
    </Tab.Navigator>
  );
};

export default ManageTenureTabs;
