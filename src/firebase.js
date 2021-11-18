import firebase from "firebase"
import "firebase/auth"

const firebaseConfig = {
       apiKey: "AIzaSyDBYV-BhN_tDOeo5Rn727E_29pVAVGreHk",
       authDomain: "auth-test-fbcc1.firebaseapp.com",
       projectId: "auth-test-fbcc1",
       databaseURL:"https://auth-test-fbcc1.firebaseio.com",
       storageBucket: "auth-test-fbcc1.appspot.com",
       messagingSenderId: "122628699468",
       appId: "1:122628699468:web:904535473f436527f34be9"
     };
const app=firebase.initializeApp(firebaseConfig)
export const auth=app.auth()
export const database=firebase.firestore()
export default app;