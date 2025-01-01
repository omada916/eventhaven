let d = document;
window.reqType = "Read"
var pathd, datad;
async function request(url, way, body) {
   try {
      const response = await fetch(url, {
         method: way,
         body,
         headers: {
            "Content-type": "application/JSON; charset=UTF-8",
         },
      });
      const parsedResponse = await response.json();
      return parsedResponse;
   } catch (e) {
      console.error(e);
   }
}
function g(id) {
   return d.getElementById(id).value;
}
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
}
function t() {
   if (window.reqType === "Read") {
      window.reqType = "Write";
   } else {
      window.reqType = "Read";
   }
   d.getElementById("td").innerHTML = window.reqType;
}

document.addEventListener('DOMContentLoaded', () => {
   const toggleButton = document.getElementById("burger");
   const sidebar = document.querySelector('.sidebar');

   toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('active');
   });
});
