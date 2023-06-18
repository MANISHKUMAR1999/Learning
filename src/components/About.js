import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile"
import Profile from "./ProfileClass";
import { Component } from "react";


// const About2 = ()=>{
//   return(
//     <>
//     <div>
//       <h1>
//         About us Page
//       </h1>
//       <p>THis is the Namaste React Live Course chap07-Finding the path</p>
//       <ProfileFunctionalComponent name={"manish"}/>
//       <Profile name={"manish class"}/>

//       {/* <Outlet/> */}
//     </div>

//     </>
//   )

// }

class About extends Component{

  constructor(props){
    super(props);
    this.state = {
      userInfo:{
        name:"Dummy Name",
        location:"Dummy Location"
      }
    }
  }

 componentDidMount(){

  // const data = await fetch("https://api.github.com/users/akshaymarch7")//https://api.github.com/users/MANISHKUMAR1999
  // const json = await data.json();
  // this.setState({
  //   userInfo:json
  // })


}
  render(){
    return(
      <>
      <div>
        <h1>
          About us Page
        </h1>
        <p>THis is the Namaste React Live Course chap07-Finding the path</p>
        <ProfileFunctionalComponent name={"manish"}/>
        <Profile name={"manish class"}/>
  
        {/* <Outlet/> */}
      </div>
  
      </>
    )

  }
}

export default About;