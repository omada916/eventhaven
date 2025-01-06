import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
   apiKey: "AIzaSyDol293-uzm6oykcG47e_M4aOj71zG4U9U",
   authDomain: "node-project-a176d.firebaseapp.com",
   projectId: "node-project-a176d",
   storageBucket: "node-project-a176d.firebasestorage.app",
   messagingSenderId: "705351216802",
   appId: "1:705351216802:web:d16ccfa16d0f9d1da9b1fb",
   measurementId: "G-0L9BLHYXST",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const getValuesAsJson = async (route) => {
   try {
      const dbRef = ref(db, route); // Reference to the specific route
      const snapshot = await get(dbRef); // Fetch the data

      if (snapshot.exists()) {
         const data = snapshot.val(); // Extract the data as a JavaScript object
         const jsonData = JSON.stringify(data, null, 2); // Convert to JSON string
         console.log(jsonData); // Log the JSON data
         return jsonData; // Return the JSON data
      } else {
         console.log("No data found at the specified route.");
         return "No data";
      }
   } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
   }
};

export const fetchFirebaseData = async (route) => {
   try {
      const dbRef = ref(db, route); // Create a reference to the route
      const snapshot = await get(dbRef); // Fetch the data

      if (snapshot.exists()) {
         return snapshot.val(); // Return the data
      } else {
         throw new Error("No data found at the specified route.");
      }
   } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
   }
}
