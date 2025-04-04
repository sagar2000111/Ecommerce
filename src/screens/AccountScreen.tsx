import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../assets/profile.jpg')}
        style={styles.profileImage}
      />
      <View style={styles.detailsContainer}>
        <TextInput placeholder="Name" style={styles.textInput} />
        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput placeholder="Delivery Address" style={styles.textInput} />
        <TextInput placeholder="Password" style={styles.textInput} />
        <View>
          <View style={styles.paymentDetails}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              Payment Details
            </Text>
            <Icon name="arrow-forward" size={30} color="black" />
          </View>
          <View style={styles.paymentDetails}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              Payment Details
            </Text>
            <Icon name="arrow-forward" size={30} color="black" />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity style={styles.EditButton}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.LogotButton}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5004F',
    height: 600,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  detailsContainer: {
    height: 600,
    width: 410,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 15,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  EditButton: {
    height: 50,
    width: '40%',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#1D1616',
  },
  LogotButton: {
    height: 50,
    width: '40%',
    borderRadius: 10,
    borderColor: '#F5004F',
    borderWidth: 1,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'white',
  },
  paymentDetails: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
});
