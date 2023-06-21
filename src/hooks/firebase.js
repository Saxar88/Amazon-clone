import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCn2b8XUn6hQvVTyyiziSeTJRjd0RUw4SM',
	authDomain: 'clone-fd68b.firebaseapp.com',
	projectId: 'clone-fd68b',
	storageBucket: 'clone-fd68b.appspot.com',
	messagingSenderId: '442990054938',
	appId: '1:442990054938:web:4e7eae26d990bebb950ba3',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
