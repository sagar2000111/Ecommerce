import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface ActionItem {
  icon: ImageSourcePropType;
  label: string;
}

const actions: ActionItem[] = [
  {icon: require('../assets/manage-property.jpeg'), label: 'Manage Property'},
  {icon: require('../assets/manage-tenure.jpeg'), label: 'Manage Tenure'},
  {icon: require('../assets/bookings.jpeg'), label: 'Tenant Bookings'},
  {icon: require('../assets/exit.jpeg'), label: 'Exit Request'},
  {icon: require('../assets/extension.jpeg'), label: 'Stay Extension'},
  {icon: require('../assets/service.jpeg'), label: 'Service Requests'},
  {icon: require('../assets/bills.jpeg'), label: 'Bills & Charges'},
  {icon: require('../assets/occupancy.jpeg'), label: 'Occupancy & PnL'},
  {icon: require('../assets/payouts.jpeg'), label: 'Owner Payouts'},
];

const routeMap: Record<string, string> = {
  'Manage Property': 'ManagePropertyTabs',
  'Manage Tenure': 'ManageTenureTabs',
  'Tenant Bookings': 'TenantBookingsTabs',
  'Exit Request': 'ExitRequestTabs',
  'Stay Extension': 'StayExtensionTabs',
  'Service Requests': 'ServiceRequestTabs',
  'Bills & Charges': 'BillsChargesTabs',
  'Occupancy & PnL': 'OccupancyPnLTabs',
  'Owner Payouts': 'OwnerPayoutsTabs',
};

const MainActionsGrid: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {actions.map((item, index) => (
        <TouchableOpacity
          style={[styles.item, getBorderStyle(index)]}
          key={index}
          onPress={() => {
            const route = routeMap[item.label];
            console.log(route, 'route');
            if (route) {
              navigation.navigate(route);
            }
          }}>
          <Image source={item.icon} style={styles.icon} resizeMode="contain" />
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// 👇 Add borders to simulate grid lines
const getBorderStyle = (index: number) => {
  const borderRight = (index + 1) % 3 !== 0;
  const borderBottom = index < 6;
  return {
    borderRightWidth: borderRight ? 1 : 0,
    borderBottomWidth: borderBottom ? 1 : 0,
    borderColor: '#e0e0e0',
  };
};

export default MainActionsGrid;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    margin: 20,
  },
  item: {
    width: '33.33%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    width: 56,
    height: 66,
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 4,
  },
});
