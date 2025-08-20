import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class About  extends React.Component{
    constructor(props) {
        super(props);

      
    } 

       render(){
         return(
        <div>
            <h1>React about us page</h1>

             <UserClass name = { "Apoorv "}/>
             
            </div>
          
    )
}
}



   

export default About;