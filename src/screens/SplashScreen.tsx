import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const SplashScreen = ({navigation}: any) => {
  setTimeout(() => {
    navigation.navigate('SignIn');
  }, 2000);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.jpg')}
        style={{width: 200, height: 200, borderRadius: 10}}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d48cce',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
