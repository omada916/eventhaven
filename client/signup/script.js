async function createAccount() {
   const userData = {
      name: g("name"),
      username: g("un"),
      email: g("email"),
      password: g("password")
   }
   await request("/auth/signup", "POST", JSON.stringify(userData));
}

function convtoenc() {
   
}