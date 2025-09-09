import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCard from "./RestaurantCard";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { useState } from "react";


const RestaurantsMenu = () =>{
    const { resId }= useParams();  
    
    const resInfo = useRestaurantMenu(resId);

    const[showIndex ,setShowIndex] = useState(null);
      
       if ( resInfo === null ) return (<Shimmer/>);
  
      const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; 

const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

console.log(categories);


    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name }</h1>
            <p className="font-bold text-lg">{cuisines}-{costForTwoMessage}</p>
             {categories.map((category,index) => 
              
             (<RestaurantCategory 
                 key={category?.card?.card?.categoryId}
                 data={category?.card?.card}
                 showItems={index === showIndex ? true : false}
                 setShowIndex={()=> setShowIndex(index)}
                 
                />)
            
                )}
           
        </div>
    )
}
//resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards[0]?.card?.info?.name
export default RestaurantsMenu;
