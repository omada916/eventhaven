import { writeData } from "../functions";
export const signup = async (req, res) => {
   try {
      const { Name, username, email, password } = req.body;
      const emailRegEx = /^[^s@]+@[^/s@]+\.[^'s@]+$/;
      if (!emailRegEx.test(email)) {
         return res.status(400).json({ error: "invalid email format" });
      }

      const newUser = {
         Name,
         username,
         email,
         password,
      }

      if (newUser) {
         writeData(`/users/${username}`, newUser)
         res.status(201);
      }
   } catch (error) {
      console.error(error);
   }
   res.json({
      data: "Signup endpoint reached",
   });
}