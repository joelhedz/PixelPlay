// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAAbR1izXtSwnBi_kAw8A5WcqawM7rgm0',
  authDomain: 'pixelplay2.firebaseapp.com',
  projectId: 'pixelplay2',
  storageBucket: 'pixelplay2.appspot.com',
  messagingSenderId: '979296020860',
  appId: '1:979296020860:web:5600e017e5285a437b5cf9'
}

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)
export default appFirebase
