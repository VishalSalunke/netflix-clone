// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBa-fkzpGBnni-bwrA1tcFmbOg3FXJ2Cmo',
  authDomain: 'mern-netflix-clone-796ad.firebaseapp.com',
  projectId: 'mern-netflix-clone-796ad',
  storageBucket: 'mern-netflix-clone-796ad.appspot.com',
  messagingSenderId: '891554028517',
  appId: '1:891554028517:web:a2429ff1889d02296eed0c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(app)
