import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    return(
        <div className="header">
         <div className="logo-container">

           <Link to="/"><img className="logo" src ={LOGO_URL} /></Link> 
         </div>
         <div className="nav-items">
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li>Cart</li>
                <li><Link to="/contact">Contact Us</Link></li>
                <button className="btn"
                onClick={()=>{
                    btnName==="Login" 
                    ? setbtnName("Logout") 
                    : setbtnName("Login");
                }}
                >
                   {btnName}
                </button>
            </ul>
         </div>
        </div>
    );
} ;
export default Header;