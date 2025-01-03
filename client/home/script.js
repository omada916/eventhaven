let d = document;
window.reqType = "Read"

function g(w, id) {
   if (w === "i") {
      return d.getElementById(id).value;
   } else if (w === "q") {
      return d.querySelector(id);
   }
}
/*
function createEvent() {
   var eventInfo = {
      name: g("name"),
      desc: g("desc"),
      info: {
         date: g("date"),
         time: g("time"),
         location: g(""),
      }
   }
}*/
function t() {
   if (window.reqType === "Read") {
      window.reqType = "Write";
   } else {
      window.reqType = "Read";
   }
   d.getElementById("td").innerHTML = window.reqType;
}
const toggleButton = document.querySelector(".burger")
const sidebar = document.querySelector('.sidebar');


document.addEventListener('DOMContentLoaded', () => {
   toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('active');
   });
});

function showSignUp() {
   document.querySelector(".signup-container").style.display = "flex";
   document.querySelector(".login-container").style.display = "none";
   sidebar.classList.toggle('active');
   g("q", ".burger").checked = false;
}
function showLogin() {
   document.querySelector(".login-container").style.display = "flex";
   document.querySelector(".signup-container").style.display = "none"
}