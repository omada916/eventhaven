import Cookies from "js-cookie";

export const setCookie = (key, val, days) => {
   Cookies.set(key, val, { expires: days }); // Expires in 7 days
   console.log("Cookie set!");
};
export const readCookie = (key) => {
   const val = Cookies.get(key);
   console.log(`${key}: ${val || "Cookie not found"}`);
   return val;
};
