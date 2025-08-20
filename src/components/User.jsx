import { useState } from "react";

const User = ({name}) => {
    const [count,setcount] = useState(0);
    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
        <h2> Name : {name} </h2>
        <h3> Location : Lucknow </h3>
        <h4> Contact info ig : @apoorvvvvvvvv</h4>
        </div>
)}
export default User;