import React from "react";

class Profile extends React.Component{
  // constructor(props){

  //   super(props)

  //   this.state = {
  //     count:0,
  //     count2:0
  //   }

  //   console.log("Constructor")

  // }

  constructor(props){
    super(props);
    this.state = {
      userInfo:{
        name:"Dummy Name",
        location:"Dummy Location"
      }
    }
  }


  async componentDidMount(){ // Mount called after first render
    // Best place for API call
    console.log("ComponentDidMount")
    const data = await fetch("https://api.github.com/users/MANISHKUMAR1999")//https://api.github.com/users/MANISHKUMAR1999
  const json = await data.json();
  this.setState({
    userInfo:json
  })
  }

  componentDidUpdate(prevProps,prevState){ // Update called after every re-render
    if(this.state.count === prevState.count)
    {}
      if(this.state.count2 === prevState.count2)
      {
        //code

      }
    console.log("Component Did Update")
  }

  componentWillUnmount(){
    console.log("Component will unmount")
  }

 render(){
  console.log("render")
  // const {count} = this.stste
  return(
    <div>
<h1>Profile class Component</h1>
<h2>Name: {this.state.userInfo.name}</h2>
<h2>Location: {this.state.userInfo.location}</h2>
<img src={this.state.userInfo.avatar_url}/>
{/* <h2>Count2 : {this.state.count2}</h2> */}
{/* <button onClick={()=>{
  this.setState({
    count:1,
    count2:2
  })
}}>Set Count</button> */}
    </div>
    
  )
 }
}

export default Profile