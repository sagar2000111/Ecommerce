import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {LinearGradient} from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';

const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const handleLogout = async () => {
    await auth().signOut();
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <LinearGradient
        colors={['#c764c0', '#ecb7e7']}
        style={styles.headerContainer}>
        <View style={styles.profileHeader}>
          <Image
            source={require('../assets/profile.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Alex Johnson</Text>
          <Text style={styles.profileEmail}>alex.johnson@example.com</Text>
        </View>
      </LinearGradient>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.inputContainer}>
          <Icon
            name="person-outline"
            size={20}
            color="#c764c0"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#999"
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name="mail-outline"
            size={20}
            color="#c764c0"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#999"
            style={styles.textInput}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name="location-outline"
            size={20}
            color="#c764c0"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Delivery Address"
            placeholderTextColor="#999"
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name="lock-closed-outline"
            size={20}
            color="#c764c0"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            style={styles.textInput}
            secureTextEntry
          />
        </View>

        <Text style={styles.sectionTitle}>Account Settings</Text>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Icon name="card-outline" size={22} color="#c764c0" />
            <Text style={styles.menuText}>Payment Methods</Text>
          </View>
          <Icon name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Icon name="time-outline" size={22} color="#c764c0" />
            <Text style={styles.menuText}>Order History</Text>
          </View>
          <Icon name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Icon name="notifications-outline" size={22} color="#c764c0" />
            <Text style={styles.menuText}>Notifications</Text>
          </View>
          <Icon name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Update Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
            <Icon name="log-out-outline" size={20} color="#c764c0" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
  },
  headerContainer: {
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 15,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  detailsContainer: {
    flex: 1,
    padding: 25,
    marginTop: -20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c764c0',
    marginBottom: 15,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
    color: '#333',
    fontSize: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#555',
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#c764c0',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
    elevation: 3,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#c764c0',
    elevation: 3,
  },
  logoutButtonText: {
    color: '#c764c0',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5,
  },
});

export default ProfileScreen;
