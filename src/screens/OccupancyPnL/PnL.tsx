// PnL.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    month: 'APR',
    year: '2024',
    occ: '85%',
    gm: '35%',
    arpu: '11,800',
    pnl: '21,320',
    pnlColor: '#222',
  },
  {
    month: 'MAY',
    year: '2024',
    occ: '58%',
    gm: '-5%',
    arpu: '10,356',
    pnl: '-8,900',
    pnlColor: 'red',
  },
  {
    month: 'JUN',
    year: '2024',
    occ: '76%',
    gm: '1%',
    arpu: '10,356',
    pnl: '-900',
    pnlColor: 'red',
  },
];

const PnL = ({navigation}: any) => {
  const renderItem = ({item}: {item: any}) => (
    <View>
      <View style={styles.row}>
        <View style={styles.monthContainer}>
          <View style={styles.yearTag}>
            <Text style={styles.yearText}>{item.year}</Text>
          </View>
          <Text style={styles.monthText}>{item.month}</Text>
        </View>
        <Text style={styles.cell}>{item.occ}</Text>
        <Text style={[styles.cell, item.gm.startsWith('-') && {color: 'red'}]}>
          {item.gm}
        </Text>
        <Text style={styles.cell}>{item.arpu}</Text>
        <Text style={[styles.cell, {color: item.pnlColor}]}>{item.pnl}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <LinearGradient
            colors={['#7a00ff', '#ff00c8']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.backButton}>
            <Icon name="arrow-left" size={18} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.headerText}>To Vacate</Text>
      </View>
      <View style={styles.container}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>MONTH</Text>
          <Text style={styles.headerCell}>OCC %</Text>
          <Text style={styles.headerCell}>GM %</Text>
          <Text style={styles.headerCell}>ARPU</Text>
          <Text style={styles.headerCell}>PNL</Text>
        </View>

        {/* Data Rows */}
        <FlatList
          data={data}
          keyExtractor={item => item.month}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eef2f5',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
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
  container: {
    margin: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingHorizontal: 12,
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  headerCell: {
    flex: 1,
    fontWeight: '600',
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  monthContainer: {
    flex: 1,
    alignItems: 'center',
  },
  yearTag: {
    backgroundColor: '#ecd8ff',
    borderRadius: 6,
    paddingHorizontal: 4,
    marginBottom: 2,
  },
  yearText: {
    fontSize: 10,
    color: '#8000ff',
    fontWeight: '500',
  },
  monthText: {
    fontWeight: '700',
    fontSize: 14,
    color: '#000',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});

export default PnL;
