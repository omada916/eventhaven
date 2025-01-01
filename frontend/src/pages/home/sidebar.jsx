import "./sidebar.css";
function sidebar() {
   return (
      <div>
         <label style={burgerStyle} class="burger" for="burger">
            <input type="checkbox" class="toggle-sidebar-button" id="burger"></input>
            <span></span>
            <span></span>
            <span></span>
         </label>

         <div class="sidebar">
            <h2 class="sidebar-title">Menu</h2>
            <ul class="sidebar-menu">
               <li><a href="/home"><button>Home</button></a></li>
               <li><a href="/signup"><button>Signup</button></a></li>
               <li><a href="/event-creator"><button>Event Creator</button></a></li>
            </ul>
         </div>
      </div>
   );
}
export default sidebar