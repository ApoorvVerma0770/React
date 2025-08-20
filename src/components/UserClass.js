import React from "react";
 

class UserClass extends React.Component{
    constructor(props) {
        super(props);

              this.state = {
         UserInfo :{
              name : "default",
              location : "default",   
            }
    }
 }
    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/ApoorvVerma0770");
        const json = await data.json();

       this.setState({
        UserInfo : json,
       })

       console.log(json);
 }

    render(){
        return (
            <div className="user-card">
            <h2> Name : {this.state.UserInfo.login} </h2>
            <h3> Creation Date : {this.state.UserInfo.created_at} </h3>
            <h4> Contact info ig : @apoorvvvvvvvv</h4>
            </div>
    )
    }
}
export default UserClass;