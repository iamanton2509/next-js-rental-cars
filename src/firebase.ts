import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCK1gddjkxXrgBaHC7447a_i8s9CuaUVzA",
    authDomain: "fir-example-20c5a.firebaseapp.com",
    projectId: "fir-example-20c5a",
    storageBucket: "fir-example-20c5a.appspot.com",
    messagingSenderId: "1009066562665",
    appId: "1:1009066562665:web:0805f5ef12d7f8e2653ef8"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;