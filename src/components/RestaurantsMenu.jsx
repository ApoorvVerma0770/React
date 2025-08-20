import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";


const RestaurantsMenu = () =>{

    const [resInfo,setresInfo] = useState(null);
     const { resId }= useParams();

     useEffect(() => {
          fetchMenu();
     },[]);

     const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7243651&lng=83.4296686&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
     ;
     const json = await data.json();

     console.log(json);
     setresInfo(json.data);
    
     }
       if ( resInfo === null ) return (<Shimmer/>);
  
      const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return  (
        <div className="menu">
            <h1>{name }</h1>
            <h4>{cuisines}-{costForTwoMessage}</h4>
            <ul>
                {itemCards.map((item)=>(
                 <li key={item.card?.info?.id}
                 >{item.card?.info?.name} - {"Rs -"}{item.card?.info?.defaultPrice/100 || item.card?.info?.price/100 }</li>
                )) }
            </ul>
        </div>
    )
}
//resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards[0]?.card?.info?.name
export default RestaurantsMenu;