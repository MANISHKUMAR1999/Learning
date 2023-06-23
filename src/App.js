// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React,{lazy,Suspense,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./components/constant";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/UserContext";
//import Instamart from "./components/Instamart";
//import FoodFireLogo from "../Images/Food Fire Logo.png";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Title component for display logo

// RestaurantList is JSON Data for displaying cards


// Restaurant card component: Image, name, cuisine


// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index


// Footer component for footer section

const Instamart = lazy(()=>import("./components/Instamart"))

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {

  // const [user,setUser]  = useState({
  //   name:"Namaste React",
  //   email:"support@dev.com"
  // })


  const [userInfo,setUserInfo]  = useState({
    name:"Manish Kumar",
    email:"support@dev.com"
  })
  return (
    <React.Fragment>
      <UserContext.Provider 
      value = {{
        User:userInfo,
        setUserInfo:setUserInfo
      }}
      >

     
      <Header />
      <Outlet/>
     
      <Footer />
      </UserContext.Provider>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:'/',
          element:<Body user={{
            name:"Namaste React",
            email:"support@dev.com"
          }}/>
        },
        {
          path:'/about',
          element:<About/>,
          children:[
            {
              path:"profile",
              element:<Profile/>
            }
          ]
        },
        {
          path:'/contact',
          element:<Contact/>
          
        },
        {
          path:'/restaurant/:resId',
          element:<RestaurantMenu/>
        },
        {
          path:'/instamart',
          element: <Suspense fallback={<Shimmer/>}> <Instamart/></Suspense>
        }
      ]
     
    }
   
  ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
