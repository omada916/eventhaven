import { ref, get, set, update, remove, child } from "firebase/database";
import db from "./firebase/db.js";
import path from "path";

export const getData = async (path, pname) => {
   var data = 'Nothing was run';
   var dbRef = ref(db, path)
   await get(child(dbRef, pname))
      .then((snapshot) => {
         data = snapshot.exists();
         if (snapshot.exists()) {
            data = snapshot.val();
         } else {
            data = "No";
         }
      })
      .catch((error) => {
         data = `Error: ${error}`
      });
   return data;
}

export const writeData = async (path, data) => {
   var output = 'Nothing was run';
   var dbRef = ref(db, path)
   await set(dbRef, data)
      .then(() => {
         output = 'Data was written';
      })
      .catch((error) => {
         output = `Error: ${error}`
      });
   console.log(output);
}
export const setData = async (route, newData) => {
   try {
      if (typeof newData !== 'object' || newData === null || Array.isArray(newData) || Object.keys(newData).length === 0) {
         throw new Error('newData must be a non-empty object.');
      } else {
         const dbRef = child(db, route); // Create a reference to the route
         await update(dbRef, newData); // Update the data 
      }
      console.log('Data updated successfully!');
   } catch (error) {
      console.error('Error updating data:', error);
   }
}
const parseCookies = (req) => {
   const cookies = {};
   if (req.headers.cookie) {
      req.headers.cookie.split(";").forEach((cookie) => {
         const [name, value] = cookie.trim().split("=");
         cookies[name] = value;
      });
   }
   return cookies;
};

export const authenticate = (req, res, next) => {
   const cookies = parseCookies(req);
   const token = cookies.token;

   if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
   }

   if (token === "your-secure-token") {
      next();
   } else {
      res.status(401).json({ message: "Invalid token" });
   }
};
export const deleteData = async (path) => {
   var output = 'Nothing was run';
   var dbRef = ref(db, `${path}`);
   await remove(dbRef)
      .then(() => {
         output = 'Data was deleted';
      })
      .catch((error) => {
         output = `Error: ${error}`
      });
   return output;
}