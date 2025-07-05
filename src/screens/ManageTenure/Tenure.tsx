import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface TenureDetails {
  tenure: string; // e.g., "12 months"
  rent: string; // e.g., "15000"
  startDate: Date; // Start of the rental period
  endDate: Date; // End of the rental period
  tds: 'YES' | 'NO'; // Whether TDS applies
  deposit: string; // Deposit amount
  agreementDate: Date; // Date of agreement
  lockIn: string; // Lock-in period, e.g., "6 months"
  escalation: string; // Escalation clause, e.g., "5% annually"
}

const Tenure = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tenures, setTenures] = useState([]);

  const [form, setForm] = useState<TenureDetails>({
    tenure: '',
    rent: '',
    startDate: new Date(),
    endDate: new Date(),
    tds: 'YES',
    deposit: '',
    agreementDate: new Date(),
    lockIn: '',
    escalation: '',
  });
  const [showPicker, setShowPicker] = useState({field: '', show: false});

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setForm({...form, [showPicker.field]: selectedDate});
    }
    setShowPicker({field: '', show: false});
  };

  const handleChange = (field: string, value: string) => {
    setForm({...form, [field]: value});
  };

  const handleCreateTenure = () => {
    setTenures([...tenures, form]);
    setForm({
      tenure: '',
      rent: '',
      startDate: new Date(),
      endDate: new Date(),
      tds: 'YES',
      deposit: '',
      agreementDate: new Date(),
      lockIn: '',
      escalation: '',
    });
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tenure Creation</Text>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')} // simple and safe
        >
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
      <ScrollView>
        {tenures.map((item: TenureDetails, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.headerRow}>
              <Text style={styles.tenureTitle}>Tenure {index + 1}</Text>
              <Text
                style={
                  index === tenures.length - 1
                    ? styles.activeStatus
                    : styles.completeStatus
                }>
                {index === tenures.length - 1 ? 'Active' : 'Complete'}
              </Text>
            </View>
            <Text style={styles.typeTitle}>
              {item.rent.toLowerCase().includes('commission')
                ? 'Revenue Share'
                : 'Fixed Rental'}
            </Text>

            <Text style={styles.detailText}>
              Deposit : Agreed {item.deposit.split(',')[0]}, Paid{' '}
              {item.deposit.split(',')[1] || item.deposit.split(',')[0]}
            </Text>
            <Text style={styles.detailText}>
              Rent : {item.rent} –{' '}
              {item.tds === 'NO' ? 'No TDS' : 'TDS Deducted'}
            </Text>
            <Text style={styles.detailText}>
              Term : {item.tenure}, Start{' '}
              {item.startDate.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: '2-digit',
              })}{' '}
              – End{' '}
              {item.endDate.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: '2-digit',
              })}
            </Text>
            <Text style={styles.detailText}>
              Agreement Date :{' '}
              {item.agreementDate.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: '2-digit',
              })}
            </Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.addText}>Add New Tenure</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <ScrollView style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Create Tenure</Text>

          <Text style={styles.label}>Agreed Tenure</Text>
          <TextInput
            style={styles.input}
            value={form.tenure}
            onChangeText={v => handleChange('tenure', v)}
          />

          <Text style={styles.label}>Agreed Rent</Text>
          <TextInput
            style={styles.input}
            value={form.rent}
            onChangeText={v => handleChange('rent', v)}
          />

          <Text style={styles.label}>Start Date</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowPicker({field: 'startDate', show: true})}>
            <Text>{form.startDate.toDateString()}</Text>
          </TouchableOpacity>

          <Text style={styles.label}>End Date</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowPicker({field: 'endDate', show: true})}>
            <Text>{form.endDate.toDateString()}</Text>
          </TouchableOpacity>

          <Text style={styles.label}>TDS Deduction</Text>
          <TextInput
            style={styles.input}
            value={form.tds}
            onChangeText={v => handleChange('tds', v)}
          />

          <Text style={styles.label}>Agreed Deposit</Text>
          <TextInput
            style={styles.input}
            value={form.deposit}
            onChangeText={v => handleChange('deposit', v)}
          />

          <Text style={styles.label}>Agreement Date</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowPicker({field: 'agreementDate', show: true})}>
            <Text>{form.agreementDate.toDateString()}</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Agreed Lock-In</Text>
          <TextInput
            style={styles.input}
            value={form.lockIn}
            onChangeText={v => handleChange('lockIn', v)}
          />

          <Text style={styles.label}>Rent Escalation</Text>
          <TextInput
            style={styles.input}
            value={form.escalation}
            onChangeText={v => handleChange('escalation', v)}
          />

          {showPicker.show && (
            <DateTimePicker
              value={form[showPicker.field] || new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
            />
          )}

          <TouchableOpacity
            style={styles.createBtn}
            onPress={handleCreateTenure}>
            <Text style={styles.createBtnText}>CREATE TENURE</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 16, backgroundColor: '#f0f5f9', flex: 1},
  header: {fontSize: 20, fontWeight: 'bold', marginBottom: 16},
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },
  title: {fontSize: 16, fontWeight: '600', marginBottom: 4},
  addText: {color: 'blue', textAlign: 'center', marginTop: 16},
  modalContainer: {padding: 20},
  modalTitle: {fontSize: 18, fontWeight: 'bold', marginBottom: 20},
  label: {marginTop: 10, marginBottom: 4, fontWeight: '500'},
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  createBtn: {
    backgroundColor: '#7a00ff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  backButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  createBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  tenureTitle: {
    fontWeight: 'bold',
    color: '#555',
    fontSize: 13,
  },
  activeStatus: {
    color: '#03A678',
    fontSize: 13,
    fontWeight: '500',
  },
  completeStatus: {
    color: '#999',
    fontSize: 13,
    fontWeight: '500',
  },
  typeTitle: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 6,
    color: '#222',
  },
  detailText: {
    fontSize: 13,
    color: '#444',
    marginBottom: 2,
  },
});

export default Tenure;
