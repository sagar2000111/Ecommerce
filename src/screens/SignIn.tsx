import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import {_signInWithGoogle} from '../config/firebase/GoogleSignIn';
import {getAuth, signInWithEmailAndPassword} from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function googleSignIn() {
    _signInWithGoogle().then(data => {
      if (!data) {
        console.log('=> Error:', 'No Data');
        return;
      }
      console.log('=>Success', data);
    });
  }

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      setLoginModalVisible(false);
      navigation.navigate('BottomTab');
      // Alert.alert('Success', 'Logged in successfully!');
    } catch (error) {
      let errorMessage = 'Login failed. Please try again.';
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password';
          break;
      }
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        style={{width: '100%', height: '50%'}}
        source={require('../assets/sign.jpg')}
      />
      <Text style={styles.welcomeText}>Hello</Text>
      <Text style={styles.subWelcomeText}>Welcome to our Ecommerce App</Text>

      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => setLoginModalVisible(true)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.signupButton]}
          onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.socialText}>Or via social media</Text>

      <View style={styles.socialContainer}>
        <Image
          style={styles.socialIcon}
          source={require('../assets/facebook.png')}
        />
        <Pressable onPress={() => googleSignIn()}>
          <Image
            style={styles.socialIcon}
            source={require('../assets/social.png')}
          />
        </Pressable>
        <Image
          style={styles.socialIcon}
          source={require('../assets/linkedin.png')}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={loginModalVisible}
        onRequestClose={() => setLoginModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Login</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setLoginModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.loginModalButton]}
                onPress={handleLogin}>
                <Text style={styles.modalButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  subWelcomeText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  socialText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialIcon: {
    height: 50,
    width: 50,
    margin: 10,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginHorizontal: 10,
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#c764c0',
  },
  signupButton: {
    backgroundColor: '#ecb7e7',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#c764c0',
  },
  input: {
    height: 50,
    borderColor: '#ecb7e7',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#cccccc',
  },
  loginModalButton: {
    backgroundColor: '#c764c0',
  },
  modalButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignIn;
