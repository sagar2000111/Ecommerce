import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Pending = ({navigation}: any) => {
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
        <Text style={styles.headerText}>Exit Request</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.id}>T30325 - Venkatesh Gurunathan</Text>
            <Text style={styles.date}>on 1st Apr,25</Text>
          </View>

          <View style={styles.tagContainer}>
            <Text style={styles.tag}>Relocation of work place within city</Text>
          </View>

          <View style={styles.dateSection}>
            <Text style={styles.month}>MAY</Text>
            <Text style={styles.day}>02</Text>
          </View>

          <View style={styles.ratingSection}>
            <Rating label="Overall" icon="grin-stars" />
            <Rating label="Requests" icon="smile" />
            <Rating label="Time Taken" icon="surprise" />
            <Rating label="Stay Again" icon="grin-stars" />
            <Rating label="Refer Frnds" icon="grin-stars" />
          </View>

          <View style={styles.commentSection}>
            <Text style={styles.commentLabel}>Comment:</Text>
            <Text style={styles.commentText}>
              "Had a great stay with GetSetHome. Will surely stay again incase I
              plan to return to this city."
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <LinearGradient
              colors={['#7a00ff', '#ff00c8']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.acceptButton}>
              <Text style={styles.acceptText}>ACCEPT</Text>
            </LinearGradient>
            <TouchableOpacity style={styles.rejectButton}>
              <Text style={styles.rejectText}>REJECT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Rating = ({label, icon}) => (
  <View style={styles.ratingItem}>
    <Text style={styles.ratingLabel}>{label}</Text>
    <Icon name={icon} size={24} color="orange" />
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: 'center',
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
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  id: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  date: {
    color: '#888',
    fontSize: 12,
  },
  tagContainer: {
    marginTop: 8,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
  },
  tag: {
    fontSize: 12,
    color: '#00796b',
  },
  dateSection: {
    alignItems: 'center',
    marginVertical: 12,
  },
  month: {
    color: '#888',
    fontSize: 16,
    fontWeight: 'bold',
  },
  day: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  ratingItem: {
    alignItems: 'center',
  },
  ratingLabel: {
    fontSize: 10,
    marginBottom: 4,
  },
  commentSection: {
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
  commentLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 12,
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  acceptButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  acceptText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rejectButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  rejectText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Pending;
