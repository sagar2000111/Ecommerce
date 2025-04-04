import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigator from './src/navigator/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
