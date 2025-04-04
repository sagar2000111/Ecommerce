import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
} from 'react-native';
import React from 'react';

import {useState} from 'react';
import {Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {clearCart} from '../store/cartSlice';

const OrderScreen = ({navigation, route}: any) => {
  const dispatch = useDispatch();
  const {total} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const taxes = 16;
  const deliveryCharge = 10;
  const handleGoBack = () => {
    setModalVisible(!modalVisible);
    dispatch(clearCart());
    navigation.replace('BottomTab');
  };
  return (
    <>
      {modalVisible ? (
        <View style={styles.centeredView}>
          <Modal animationType="slide" visible={modalVisible}>
            <View style={[styles.centeredView, styles.modalCard]}>
              <Icon name="checkmark-done" size={30} style={styles.doneIcon} />
              <Text style={styles.headingText}>Success</Text>
              <Text style={{fontSize: 18, alignSelf: 'center', marginLeft: 20}}>
                Your payment was successful A receipt for this purchase has been
                sent to your email
              </Text>
              <TouchableOpacity
                style={styles.goBackBtn}
                onPress={() => handleGoBack()}>
                <Text
                  style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                  Go Back
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            <View>
              <Text style={styles.maintext}>Order summary</Text>
            </View>
            <View style={styles.caculationContainer}>
              <View style={styles.card}>
                <Text style={styles.text}>Order</Text>
                <Text style={styles.text}>${total}</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.text}>Taxes</Text>
                <Text style={styles.text}>${taxes}</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.text}>Delivery Fees</Text>
                <Text style={styles.text}>${deliveryCharge}</Text>
              </View>
              <View style={styles.lineStyle} />
            </View>
            <View>
              <View style={styles.card}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalText}>
                  ${total + taxes + deliveryCharge}
                </Text>
              </View>

              <View style={styles.card}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Estimated delivery time:
                </Text>
                <Text style={styles.text}>15-30mins</Text>
              </View>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 30}}>
              Payment methods
            </Text>
            <View style={styles.mastercardContainer}>
              <Image
                source={require('../assets/mastercard.png')}
                style={{width: 60, height: 60}}
              />
              <View style={styles.mastercard}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Credit card
                </Text>
                <Text style={styles.text}>5105 **** **** 1234</Text>
              </View>
            </View>

            <View style={styles.visacardContainer}>
              <Image
                source={require('../assets/visa.png')}
                style={{width: 100, height: 60, resizeMode: 'contain'}}
              />
              <View style={styles.mastercard}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Credit card
                </Text>
                <Text style={styles.text}>5105 **** **** 1234</Text>
              </View>
            </View>
          </View>

          <View style={styles.totalContainer}>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Total</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                ${total + taxes + deliveryCharge}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.orderButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  Pay Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  maintext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
  mainContainer: {
    padding: 10,
    margin: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  subContainer: {
    padding: 10,
    borderRadius: 10,
    margin: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  text: {
    fontSize: 18,
    color: 'grey',
  },
  caculationContainer: {
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 13,
    paddingRight: 15,
  },
  mastercard: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 14,
    padding: 10,
  },
  mastercardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 14,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  visacardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 14,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  orderButton: {
    backgroundColor: '#3D3D3D',
    padding: 10,
    borderRadius: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 70,
  },
  goBackBtn: {
    backgroundColor: '#d91e26',
    borderRadius: 10,
    padding: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  centeredView: {
    borderRadius: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
    gap: 10,
  },
  doneIcon: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 25,
  },
  modalCard: {},
});
