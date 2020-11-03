import Firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyAgvm0mHQ_7KNJ__fxL4gA06Uggmr-13UM',
  authDomain: 'timchist-d6d7d.firebaseapp.com',
  databaseURL: 'https://timchist-d6d7d.firebaseio.com',
  projectId: 'timchist-d6d7d',
  storageBucket: 'timchist-d6d7d.appspot.com',
  messagingSenderId: '875204576905',
  appId: '1:875204576905:web:68a7dee315c68ec7196858',
  measurementId: 'G-60MSB3NXWP'
}
// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig)

export default firebaseApp
