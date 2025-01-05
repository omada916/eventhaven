import { ref, get, set, child } from "firebase/database";

export const getData = async (db, path, pname) => {
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

export const writeData = async (db, path, data) => {
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

export const authenticate = (req, res, next, db) => {
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