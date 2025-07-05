import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonActions, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'; // Ensure this is installed

interface RentItem {
  id: string;
  month: string;
  amount: string;
  invoiceNumber: string;
  dueDate: string;
  isPaid: boolean;
  paidDate?: string;
}

const rentData: RentItem[] = [
  {
    id: '1',
    month: 'September 2023',
    amount: 'Rs. 48,000',
    invoiceNumber: 'INVRT123456AD',
    dueDate: '5th September 2023',
    isPaid: false,
  },
  {
    id: '2',
    month: 'August 2023',
    amount: 'Rs. 48,000',
    invoiceNumber: 'INVRT123456AD',
    dueDate: '',
    isPaid: true,
    paidDate: '5 Sept, 2023',
  },
];

const RentScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item, index}: {item: RentItem; index: number}) => (
    <View>
      <View style={styles.itemSection}>
        <View style={styles.row}>
          <Text style={styles.label}>
            Rent Invoice <Text style={styles.month}>{item.month}</Text>
          </Text>
          <Text style={styles.invoice}>{item.invoiceNumber}</Text>
        </View>

        <Text style={styles.amount}>{item.amount}</Text>

        {!item.isPaid ? (
          <View style={styles.row}>
            <Text style={styles.dueText}>Due date {item.dueDate}</Text>
            <TouchableOpacity style={styles.payNowBtn}>
              <Text style={styles.payNowText}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.row}>
            <Text style={styles.paidText}>
              PAID
              <Text style={styles.paidSubText}> on {item.paidDate}</Text>
            </Text>
            <TouchableOpacity>
              <Icon name="download" size={20} color="#5c5c5c" />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {index !== rentData.length - 1 && <View style={styles.separator} />}
    </View>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')} // simple and safe
        >
          <LinearGradient
            colors={['#7a00ff', '#ff00c8']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.backButton}>
            <Icon name="arrow-left" size={18} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.headerText}>Rent Payments</Text>
      </View>

      <View style={styles.card}>
        <FlatList
          data={rentData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

export default RentScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f0f5f9',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  backButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    overflow: 'hidden',
    height: '100%',
    elevation: 6,
  },
  itemSection: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  label: {
    color: '#666',
    fontSize: 13,
  },
  month: {
    fontWeight: 'bold',
    color: '#000',
  },
  invoice: {
    fontSize: 12,
    color: '#999',
  },
  amount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 6,
  },
  dueText: {
    color: '#999',
    fontSize: 12,
  },
  payNowBtn: {
    backgroundColor: '#3e1eff',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  payNowText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  paidText: {
    color: 'green',
    fontWeight: 'bold',
  },
  paidSubText: {
    fontWeight: 'normal',
    color: '#444',
    fontSize: 12,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
    marginHorizontal: 16,
  },
});
