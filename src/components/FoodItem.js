//import { IMG_CDN_URL } from "./contant";
import { useDispatch,useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "./constant";

const FoodItem = (props) => {
 // console.log(props)

  const cartItems = useSelector(store=>store.cart.items)

 // console.log(cartItems,"hiiii")
  const dispatch = useDispatch()

  const handleRemoveItemFromCart = (props) => {
   // console.log(props,"hiiiiiiiii")
    dispatch(removeItem(props));
   // console.log(id)
  };

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + props.imageId} alt="no-image" />
      <h2 className="font-bold text-xl">{props.name}</h2>
      <h3>{props.category}</h3>
      <h4>Rupees: {props.price / 100}</h4>
      <h4>{props.id}</h4>
      <button className="w-62 m-2 bg-green-50"  onClick={() => handleRemoveItemFromCart(props)}>Remove Item from cart</button>

    </div>
  );
};

export default FoodItem;
