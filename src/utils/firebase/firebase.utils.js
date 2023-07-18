import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
} from "firebase/auth"

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

// -------------------------------------------------------------

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1eFUbTS3djG7kjN-LVbreGTtpdD3LBpU",

  authDomain: "clothes-e-commerce-2c952.firebaseapp.com",

  projectId: "clothes-e-commerce-2c952",

  storageBucket: "clothes-e-commerce-2c952.appspot.com",

  messagingSenderId: "198703519904",

  appId: "1:198703519904:web:97d947554a82c3f75351c5",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// --------------------------------------------------------------

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return
  const userDocRef = doc(db, "users", userAuth.uid)

  console.log("USER DOC REF", userDocRef)

  const userSnapShot = await getDoc(userDocRef)
  console.log("USER SNAP SHOT", userSnapShot)
  console.log(userSnapShot.exists())

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log(error, "ERROR CREATING THE USER")
    }
  }

  return userDocRef
}

export const createUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await _createUserWithEmailAndPassword(auth, email, password)
}
