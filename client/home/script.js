let d = document;

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
      name: g("q", "name"),
      desc: g("q", "desc"),
      info: {
         date: g("q", "date"),
         time: g("q", "time"),
         location: g("q", ""),
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
