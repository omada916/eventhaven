import Cookies from "js-cookie";

export const setCookie = (key, val, days) => {
   Cookies.set(key, val, { expires: days }); // Expires in 7 days
   console.log("Cookie set!");
};
export const readCookie = (key) => {
   return Cookies.get(key) || null;
};
export const delCookie = (key) => {
   Cookies.remove(key)
}