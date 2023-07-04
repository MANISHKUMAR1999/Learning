import { createContext } from "react";

const UserContext = createContext({
  User:{
    name:"Test Name",
    email:"Test @gmail.com"
  }
 
})

UserContext.displayName="Usercontext"

export default UserContext;