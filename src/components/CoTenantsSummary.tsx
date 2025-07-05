import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageSourcePropType,
} from 'react-native';

interface Tenant {
  name: string;
  status: 'On Notice' | 'New Movein' | 'To be Revised' | '';
  remark?: string;
  avatar: ImageSourcePropType;
  badgeColor?: string;
  labelColor?: string;
}

const tenants: Tenant[] = [
  {
    name: 'ankit',
    status: 'On Notice',
    remark: 'Unpaid',
    avatar: require('../assets/ankit.jpg'),
    badgeColor: '#e74c3c',
    labelColor: '#e74c3c',
  },
  {
    name: 'venkatesh',
    status: 'New Movein',
    avatar: require('../assets/ankit.jpg'),
    badgeColor: '#2ecc71',
  },
  {
    name: 'ramaeshwaram',
    status: 'To be Revised',
    avatar: require('../assets/ankit.jpg'),
    badgeColor: '#2980b9',
  },
  {
    name: 'venkatesh',
    status: '',
    avatar: require('../assets/ankit.jpg'),
    remark: 'Paid',
  },
  {
    name: 'sundar',
    status: '',
    avatar: require('../assets/ankit.jpg'),
  },
];

const CoTenantsSummary: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Co-Tenants Summary : April 2025</Text>
      <FlatList
        horizontal
        data={tenants}
        keyExtractor={(item, index) => item.name + index}
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.tenantItem}>
            {item.status ? (
              <View
                style={[
                  styles.badge,
                  {backgroundColor: item.badgeColor || '#ccc'},
                ]}>
                <Text style={styles.badgeText}>{item.status}</Text>
              </View>
            ) : null}
            <Image source={item.avatar} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
            {item.remark ? (
              <View
                style={[
                  styles.remarkBox,
                  {borderColor: item.labelColor || '#999'},
                ]}>
                <Text
                  style={[
                    styles.remarkText,
                    {color: item.labelColor || '#999'},
                  ]}>
                  {item.remark}
                </Text>
              </View>
            ) : null}
          </View>
        )}
      />
    </View>
  );
};

export default CoTenantsSummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f7f9',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  title: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    marginBottom: 12,
  },
  list: {
    gap: 20,
  },
  tenantItem: {
    alignItems: 'center',
    width: 80,
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  badgeText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 6,
  },
  name: {
    fontSize: 12,
    textAlign: 'center',
    color: '#444',
    fontWeight: '500',
  },
  remarkBox: {
    marginTop: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 6,
  },
  remarkText: {
    fontSize: 10,
    fontWeight: '500',
  },
});
