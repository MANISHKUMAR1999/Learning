import { createContext } from "react";

const UserContext = createContext({
  User:{
    name:"Dummy Name",
    email:"dummy@gmail.com"
  }
 
})

UserContext.displayName="Usercontext"

export default UserContext;