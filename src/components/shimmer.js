//import { shimmer_card_unit } from "../constants";

import { shimmer_card_unit } from "./constant";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

const Shimmer = () => {
  return (
   <div className="flex flex-wrap">
    {Array(10).fill("").map((e,index)=> <div className="w-52 h-52 shadow-lg" key={index}></div>)}
   
   </div>
  );
};
export default Shimmer;