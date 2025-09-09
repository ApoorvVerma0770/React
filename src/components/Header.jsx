import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; 
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
const Header = () => {
       
       const {loggedInInfo}= useContext(UserContext);

       const [btnName, setbtnName] = useState("Login");

    
       const onlineStatus = useOnlineStatus();

       const cartItems = useSelector((store)=>store.cart.items)

    return(
        <div className="header flex justify-between bg-amber-100 shadow-xl">
         <div className="logo-container w-37 ">

           <Link to="/"><img className="logo" src ={LOGO_URL} /></Link> 
         </div>
         <div className="flex items-center">
            <ul className=" flex p-3 m-3" >
                <li className="px-5">
                   Online Status : {onlineStatus ? "✅" : "🔴"}
                </li>
                <li className="px-5"> <Link to="/">Home</Link></li>
                <li className="px-5"> <Link to="/about">About</Link></li>
                <li className="px-5"> <Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                <li className="px-5"><Link to="/grocery">Grocery</Link></li>
                <li className="px-5" ><Link to="/contact">Contact Us</Link></li>
                
                <button className="btn"
                onClick={()=>{
                    btnName==="Login" 
                    ? setbtnName("Logout") 
                    : setbtnName("Login");
                }}
                >
                   {btnName}
                </button>
                <li className=" text-lg font-bold px-5" > User : {loggedInInfo}</li>
            </ul>
         </div>
        </div>
    );
} ;
export default Header;