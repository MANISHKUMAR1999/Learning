//import {render} from 'react-dom';
import { useRouteError } from "react-router-dom";
const Error = ()=>{

  const err = useRouteError();

  return(
    <>
    <div>
      <h1>OOPS!</h1>
      <h2>SomeThing went wrong</h2>
      <h1>{err.status +" "+err.statusText}</h1>
    </div>
    </>
  )

}

export default Error;