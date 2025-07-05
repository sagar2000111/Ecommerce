import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

const HeaderSection: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Property - ID, Name, Owner Name"
        placeholderTextColor="#fff"
      />
      <View style={styles.profileInfo}>
        <Image
          source={require('../assets/ankit.jpg')} // Replace with your local avatar image
          style={styles.avatar}
        />
        <View style={styles.infoText}>
          <Text style={styles.propertyId}>PRT10001</Text>
          <Text style={styles.address}>B 1406, Millionaire Heritage</Text>
          <Text style={styles.location}>Andheri West, Mumbai-400053</Text>
          <Text style={styles.owner}>
            <Text style={styles.ownerLabel}>OWNR001: </Text>
            Venkatesh Gurunathan{'\n'}
            venky111@gmail.com | 98207 91118
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6b1aff',
    padding: 12,
  },
  searchBar: {
    backgroundColor: '#aa4eff',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    marginBottom: 15,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  infoText: {
    flex: 1,
  },
  propertyId: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  address: {
    color: '#fff',
    fontSize: 13,
    marginTop: 2,
  },
  location: {
    color: '#eee',
    fontSize: 12,
  },
  owner: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'Poppins',
  },
  ownerLabel: {
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Poppins',
  },
});
