import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import store from '../redux/store';
import { setCurrentUser } from '../redux/user/user.action';

const config = {
  apiKey: "AIzaSyD5XLQH8A2mH2Ee0fxXuFjCmYtlqTs7fXg",
  authDomain: "travelandshareit.firebaseapp.com",
  databaseURL: "https://travelandshareit.firebaseio.com",
  projectId: "travelandshareit",
  storageBucket: "travelandshareit.appspot.com",
  messagingSenderId: "719016771115",
  appId: "1:719016771115:web:ecbaba1ae9543de31af46e",
  measurementId: "G-79BT3HYL03"
};

export const createUserProfileDocument = async (userAuth, additioalData) => {
  if (!userAuth) return;

  const docRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await docRef.get();

  if(!snapShot.exist) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    docRef.set({
      displayName,
      email,
      createdAt,
      fbAvatar: photoURL,
      ...additioalData
    }).then(() => {
      
    })
    .catch(e => console.log(e));
  }

  return docRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const checkUserAuth = (location="internal") => {
  auth.onAuthStateChanged(async userAuth => {
    console.log(location, 'Check user trigger', userAuth)
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        store.dispatch(setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        }));
      })
    
    }else {
      store.dispatch(setCurrentUser(userAuth));
      
    }
  });
  
};






//Google auth setup
// const provider = new firebase.auth.GoogleAuthProvider()
// provider.setCustomParameters({ prompt: 'select-account'})

//Facebook auth setup
const fbProvider = new firebase.auth.FacebookAuthProvider();
// fbProvider.addScope('first_name, last_name');
// fbProvider.setCustomParameters({ 'display': 'popup'});

export const signInWithFacebook = () => auth.signInWithPopup(fbProvider);
export const getRedirectResult = () => auth.getRedirectResult();

export const signUpWithEmail = (email, password) => auth.createUserWithEmailAndPassword(email, password);
export const signInWithEmail = (email, password) => auth.signInWithEmailAndPassword(email, password);

export default firebase;