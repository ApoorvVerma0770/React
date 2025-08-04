import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./resListIgnore";

const Header = () => {
    return(
        <div className="header">
         <div className="logo-container">

            <img className="logo" src ="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" />
         </div>
         <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
                <li>Contact Us</li>
            </ul>
         </div>
        </div>
    );
} ;

const RestaurantCard = ({resData}) => {

    const {cuisines,deliveryTime,avgRating,name,cloudinaryImageId,costForTwo}=resData?.info;
    return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>

        <img className="res-logo"
        alt="res-logo"
         src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId}/>
          <h3>{name}</h3>
          <h4>{cuisines}</h4>
          <h4>{avgRating}</h4>
          <h4>{deliveryTime}</h4>
          <h4>{costForTwo}</h4>
    </div>
    );
};



const Body =() =>{
    return(
        <div className="body">
            <div className ="search">Search</div>
            <div className="res-container">
           {
           resList.map((restaurant) => (
           < RestaurantCard key={restaurant.info.id} resData={restaurant}/>
           ))
           }
            </div>
        </div>
    )
}


const Applayout = () => {
    return (
        <div className ="App">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<Applayout />);