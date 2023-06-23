import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const {User} = useContext(UserContext)
  return (
    <div className="footer">
      Created By
      <i class="fa-solid fa-heart"></i>
      <a href="#" target="_blank">
        {User.name} | 
        {User.email}
      </a>
      <i class="fa-solid fa-copyright"></i>2023
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

export default Footer