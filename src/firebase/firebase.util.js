import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDThbmcoIxrHCMICxi4crTljb6EsxzZk2c",
	authDomain: "crwn-db-a69a4.firebaseapp.com",
	databaseURL: "https://crwn-db-a69a4.firebaseio.com",
	projectId: "crwn-db-a69a4",
	storageBucket: "crwn-db-a69a4.appspot.com",
	messagingSenderId: "1058434517980",
	appId: "1:1058434517980:web:1579f340ee73a313801d19",
	measurementId: "G-1RK4BVFX55"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message)
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;