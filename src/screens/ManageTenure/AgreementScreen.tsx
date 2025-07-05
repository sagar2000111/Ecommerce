import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const AgreementScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      {/* Header at top-left */}
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

        <Text style={styles.headerText}>Rent Payments</Text>
      </View>

      {/* Centered Image */}
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/ComingSoon.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default AgreementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
  },
});
