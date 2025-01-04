function g(w, id) {
   if (w === "i") {
      return d.getElementById(id).value;
   } else if (w === "q") {
      return d.querySelector(id);
   }
}
const toggleButton = g("q", ".hamburbur")
const sidebar = g("q", '.sidebar');


d.addEventListener('DOMContentLoaded', () => {
   toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('active');
   });
});

function showSignUp() {
   g("q", ".signup-container").style.display = "flex";
   g("q", ".login-container").style.display = "none";
   sidebar.classList.toggle('active');
   g("q", ".hamburbur").checked = false;
}
function showLogin() {
   g("q", ".login-container").style.display = "flex";
   g("q", ".signup-container").style.display = "none"
}
const others = g("q", ".radio-group").style;
function showOthers() {
   others.display = "flex";
}
function hideOthers() {
   others.display = "none";
}
async function createAccount() {
   const userCreationData = {
      name: g("i", "name"),
      username: g("i", "un"),
      email: g("i", "email"),
      password: g("i", "password")
   }
   await request("/auth/signup", "POST", JSON.stringify(userCreationData));
}

async function login() {
   const userLoginData = {
      email: g("i", "username"),
      password: g("i", "pw")
   }
   await request("/auth/login", "POST", JSON)
}