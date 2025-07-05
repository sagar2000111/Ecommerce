// Bed.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const Bed = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
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

          <Text style={styles.headerText}>Tenant Mapping</Text>
        </View>

        {/* Room Card */}
        <View style={styles.roomCard}>
          <Text style={styles.roomTitle}>Room 1</Text>
          <Text style={styles.roomPrice}>22,000</Text>

          <View style={styles.bedRow}>
            <View style={[styles.bedBox, styles.activeBed]}>
              <Icon name="bed" size={24} color="#0033cc" />
              <Text style={[styles.bedDate, {color: '#0033cc'}]}>14 Apr</Text>
              <View style={styles.tickMark}>
                <Icon name="check-circle" size={12} color="green" />
              </View>
            </View>
            <View style={styles.bedBox}>
              <Icon name="bed" size={24} color="#00b894" />
              <Text style={[styles.bedDate, {color: '#00b894'}]}>14 Apr</Text>
            </View>
            <View style={styles.bedBox}>
              <Icon name="bed" size={24} color="#00b894" />
              <Text style={[styles.bedDate, {color: '#00b894'}]}>14 Apr</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.closeBtn}>
            <View style={styles.closeCircle}>
              <Icon name="times" size={14} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Disabled Room */}
        <View style={styles.disabledRoom}>
          <Text style={styles.disabledRoomTitle}>Room 3 : Triple Sharing</Text>
          <Text style={styles.disabledRoomPrice}>Rs. 18,000</Text>
          <View style={styles.disabledLabel}>
            <Text style={styles.disabledText}>Attached Toilet</Text>
          </View>
          <TouchableOpacity>
            <LinearGradient
              colors={['#7a00ff', '#ff00c8']}
              style={styles.forwardBtn}>
              <Icon name="arrow-right" size={14} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Search Section */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchLabel}>Search Tenant</Text>
          <TouchableOpacity>
            <Text style={styles.addTenant}>Add Tenant</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchBox}>
          <TextInput
            placeholder="Tenant ID, Mobile, Email"
            style={styles.input}
          />
          <TouchableOpacity>
            <Icon name="search" size={16} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eaf2f6',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    gap: 10,
  },
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  roomCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
    position: 'relative',
    marginTop: 20,
  },
  roomTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  roomPrice: {
    position: 'absolute',
    right: 16,
    top: 16,
    fontWeight: '600',
  },
  bedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  bedBox: {
    width: 70,
    height: 70,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f0fdfb',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  activeBed: {
    borderColor: '#0033cc',
    backgroundColor: '#e6f0ff',
  },
  bedDate: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },
  tickMark: {
    position: 'absolute',
    top: 2,
    right: 2,
  },
  closeBtn: {
    position: 'absolute',
    top: -10,
    left: -10,
  },
  closeCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#3b00ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledRoom: {
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 0.6,
    marginBottom: 24,
  },
  disabledRoomTitle: {
    fontWeight: '600',
    color: '#666',
  },
  disabledRoomPrice: {
    color: '#888',
  },
  disabledLabel: {
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  disabledText: {
    fontSize: 10,
    color: '#999',
  },
  forwardBtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
  searchLabel: {
    fontWeight: '600',
    fontSize: 14,
  },
  addTenant: {
    color: '#0033cc',
    fontWeight: 'bold',
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
});

export default Bed;
