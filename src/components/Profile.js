import { useEffect, useState } from "react";

const Profile = (props)=>{

const [count,setCount] = useState(0);

useEffect(()=>{
  //API CALL

 const timer =  setInterval(()=>{
    console.log("hello")

  },1000)

  return ()=>{ 
    // Function called when we unmounting
    clearInterval(timer)

    console.log("UseEffect Return")


  }
  console.log("useEffect")

})

console.log("rendered")
  return (
    <>
    <h1>This is Profile Section</h1>
    <h3>Name :{props.name}</h3>
    <h3>Count:{count}</h3>
    <button onClick={()=>{
      setCount(count+1)
    }}>Count</button>
    </>
  )
}


export default Profile;