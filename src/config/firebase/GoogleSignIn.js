import { GoogleSignin } from '@react-native-google-signin/google-signin'; // <-- Note: `GoogleSignin` (no uppercase 'I')
import auth from '@react-native-firebase/auth';

export const _signInWithGoogle = async () => {
  try {
    // Step 1: Configure Google Sign-In
    await GoogleSignin.configure({
      webClientId: "949671738159-clr4jsv555ra50a131qb70lnm53tpgdc.apps.googleusercontent.com", // Replace with your actual client ID
      offlineAccess: false,
      scopes: ['profile', 'email'],
    });

    // Step 2: Check Play Services (Android only)
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    // Step 3: Sign in and get user info
    await GoogleSignin.signIn();
    const { idToken } = await GoogleSignin.getTokens();

    // Step 4: Authenticate with Firebase
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);

    // Optional: Return user info
    const userInfo = await GoogleSignin.getCurrentUser();
    return userInfo;
  } catch (error) {
    console.log('Google Sign-In Error:', error);
    throw error; // Re-throw to handle in the calling component
  }
};