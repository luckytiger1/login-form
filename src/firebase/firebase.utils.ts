import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBylLjumZ3TQ9TyjYOn4Kbdeh0zEWngEGI',
  authDomain: 'login-form-37dbc.firebaseapp.com',
  databaseURL: 'https://login-form-37dbc.firebaseio.com',
  projectId: 'login-form-37dbc',
  storageBucket: 'login-form-37dbc.appspot.com',
  messagingSenderId: '686430725796',
  appId: '1:686430725796:web:5df2ea3e34d004d6b0e831',
  measurementId: 'G-KQW4C9VFZL',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// const provider

export const createUserProfileDoc = async (
  userAuth: any,
  additionalData?: any,
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    console.log(userAuth.uid);

    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // console.log(additionalData);

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error happened ', error);
    }
  }
  // eslint-disable-next-line consistent-return
  return userRef;
};
