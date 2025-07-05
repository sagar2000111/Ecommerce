import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderSection from '../components/HeaderSection';
import MainActionsGrid from './MainActionGrid';
import CoTenantsSummary from '../components/CoTenantsSummary';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <HeaderSection />
      <MainActionsGrid />
      <CoTenantsSummary />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
