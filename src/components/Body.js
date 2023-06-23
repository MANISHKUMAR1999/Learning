//import RestaurantCard from "./RestaurantCard";
import RestaurantCard from "./RestraurantCard";

import { useEffect, useState,useContext } from "react"; /* This is named export */
//import Shimmer from "/Shimmer"; /* This is default export */
import Shimmer from "./shimmer";
//import { swiggy_api_URL } from "./constants";

import { swiggy_api_URL } from "./constant";
import { Link } from "react-router-dom";

import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

//import { useContext } from "react";

// Body Component for body section: It contain all restaurant cards
const Body = ({user}) => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const {User,setUserInfo} = useContext(UserContext)

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      // updated state variable restaurants with Swiggy API data
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  const offline=useOnline();

  if(! offline){
    return <h1>Offline please check your internet connection</h1>
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container p-5 bg-pink-50 my-5"> 
      <div className="flex place-content-center gap-2">

    
        <input 
          type="text"
          className="search-input rounded-full w-96 px-3"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
         className="p-2 m-2 bg-purple-900 hover:bg-green-500 text-white rounded-md"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
        <input value={User.name} onChange={(e)=>{setUserInfo({
         ...User,
         name:e.target.value
        })

        }}></input>

<input value={User.email} onChange={(e)=>{setUserInfo({
        ...User,
          email:e.target.value
        })

        }}></input>
        </div>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap ml-6 gap-4">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
             <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}> <RestaurantCard  {...restaurant.data}  user={user}/></Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;