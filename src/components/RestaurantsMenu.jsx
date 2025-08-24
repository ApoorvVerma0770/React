import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";


const RestaurantsMenu = () =>{
    const { resId }= useParams();  
    
    const resInfo = useRestaurantMenu(resId);
      
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