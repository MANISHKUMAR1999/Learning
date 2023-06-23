import { IMG_CDN_URL } from "./constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
  user
}) => {

  const {User} = useContext(UserContext)
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-200">
      <img
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
      <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{user.name}</h4>
        <h4>{costForTwoString}</h4>
        <h4>{User.name}</h4>

      </span>
    </div>
  );
};

export default RestaurantCard