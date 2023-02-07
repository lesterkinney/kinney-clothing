import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHj71A2C0m6ugKP6MhVp3RAot6oEUbBcA",
  authDomain: "kinney-clothing-db.firebaseapp.com",
  projectId: "kinney-clothing-db",
  storageBucket: "kinney-clothing-db.appspot.com",
  messagingSenderId: "255884422163",
  appId: "1:255884422163:web:7c3fcb3b68d8a34ec523e6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  const exists = userSnapshot.exists();

  if (!exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }
    catch (error) {
      console.log('error: ', error.message)
    }
  }

  return userDocRef;
};