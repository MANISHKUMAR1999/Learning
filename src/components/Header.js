 import { useState } from "react";
 import Logo from "../assets/image/food.jpg"
 import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const loggedInuser = ()=>{
  return true;
}

export const Title = () => (
  <a href="/">
    <img className="p-2 h-16 w-16 object-cover rounded-full mt-4" src={Logo} alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {

  const[isLoggedIn,setIsLoggedIn] = useState(false)

  const isOnline = useOnline()
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg  sm:bg-blue-50 sticky top-0">
      <Title />
      <div className="nav-items">
        <ul className="flex py-9">
         <Link to="/">
         <li className="px-2">Home</li>
         </Link> 
        <Link to="/about"><li className="px-2">About</li></Link>  
         
          <Link to="/contact"><li className="px-2">Contact</li></Link> 
          <li className="px-2"><i class="fa-solid fa-cart-shopping"></i></li>

          <Link to="/instamart"><li className="px-2">Instamart</li></Link> 
        </ul>
       
      </div>
      <h1>{isOnline ? "online": <h1>Last seen today : {new Date().getHours()+":"+new Date().getMinutes()}</h1>}</h1>
     

      {
          (isLoggedIn) ?<button onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>
 
        }
        
    </div>
  );
};

export default Header