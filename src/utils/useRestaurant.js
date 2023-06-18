import { useState, useEffect } from "react";
//import { FETCH_MENU_URL } from "../contants";
import { swiggy_menu_api_URL,RESTAURANT_TYPE_KEY } from "../components/constant";


const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      swiggy_menu_api_URL+resId
    );
    const json = await data.json();

    const restaurantData = json?.data?.cards?.map(x => x.card)?.
    find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
     setRestauraunt(restaurantData);
   
  }

  return restaurant;
};

export default useRestaurant;
