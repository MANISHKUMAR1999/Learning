//import { IMG_CDN_URL } from "./contant";
import { useDispatch,useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "./constant";

const FoodItem = ({ id,name, category, imageId, price,...item }) => {

  const cartItems = useSelector(store=>store.cart.items)

 // console.log(cartItems,"hiiii")
  const dispatch = useDispatch()

  const handleRemoveItemFromCart = (item) => {
    //console.log(item,"hiiiiiiiii")
    dispatch(removeItem(item));
   // console.log(id)
  };

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + imageId} alt="no-image" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{category}</h3>
      <h4>Rupees: {price / 100}</h4>
      <h4>{id}</h4>
      <button className="w-62 m-2 bg-green-50"  onClick={() => handleRemoveItemFromCart(item)}>Remove Item from cart</button>

    </div>
  );
};

export default FoodItem;
