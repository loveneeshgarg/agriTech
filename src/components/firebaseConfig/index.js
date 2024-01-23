import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyCYQbeu1lp0lBBBwaTL1sBf7Y78a8S9Hiw",
        authDomain: "farmer-2c012.firebaseapp.com",
        databaseURL: "https://farmer-2c012-default-rtdb.firebaseio.com",
        projectId: "farmer-2c012",
        storageBucket: "farmer-2c012.appspot.com",
        messagingSenderId: "307812044337",
        appId: "1:307812044337:web:379011b9ff2b48713fcf10",
        measurementId: "G-PKRT96039E"
      };

     const app = initializeApp(firebaseConfig);
     return getDatabase(app); 
}
export default StartFirebase;