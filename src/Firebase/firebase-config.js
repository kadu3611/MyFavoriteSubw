import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAs-oxK-4UX3CbyOZTLhrYS1tDddLinMZE",
  authDomain: "myfavoritesubway2.firebaseapp.com",
  projectId: "myfavoritesubway2",
  storageBucket: "myfavoritesubway2.appspot.com",
  messagingSenderId: "492061178741",
  appId: "1:492061178741:web:df62744556d49f4387713c",
  measurementId: "G-BLXX4YDR7B"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

// const firebaseConfig = {
//   apiKey: "AIzaSyAs-oxK-4UX3CbyOZTLhrYS1tDddLinMZE",
//   authDomain: "myfavoritesubway2.firebaseapp.com",
//   projectId: "myfavoritesubway2",
//   storageBucket: "myfavoritesubway2.appspot.com",
//   messagingSenderId: "492061178741",
//   appId: "1:492061178741:web:1867b3cd149f3def87713c",
//   measurementId: "G-00SPF2E241"
// };