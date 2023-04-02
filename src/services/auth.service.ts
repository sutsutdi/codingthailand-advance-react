import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import {getFirestore, setDoc , doc} from 'firebase/firestore'
import { firebaseApp } from '../configs/firebase'

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export async function registerUser(firstName: string, lastName: string,email: string, password: string) {
   try {
    const userCredential =  await createUserWithEmailAndPassword( auth , email ,password)

     // save user profile to firestore
     await setDoc(doc(db , "users" , userCredential.user.uid),{
        firstName : firstName,
        lastName : lastName,
        photoUrl :  "https://codingthailand.com/sit/img/nopic.png",
        role : "member"
     })

    return userCredential
   } catch (error) {
     throw error
   }
}