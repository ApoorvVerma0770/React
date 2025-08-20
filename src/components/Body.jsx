import { useState , useEffect} from "react";
import resList from "../utils/resListIgnore";
import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router";



const Body =() =>{

    const [listofRestaurants, setlistofRestaurants]= useState([]);

    const[FilteredRestrau, setFilteredRestrau]= useState([]);

    const[SearchText,setSearchText]= useState("");



useEffect(()=>{
    fetchData();
},[]);

const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7243651&lng=83.4296686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //Optional Chaining
    setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestrau(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
//Conditional Renedering
if(listofRestaurants.length===0){
    return(
        <Shimmer/>
    )
}

    return(
        <div className="body">
            <div className ="filter">
               <div className="search">
                <input type ="text" className="search-text" value={SearchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                    
                }}
                ></input>
                <button onClick={()=>{
                   const FilteredRestaurants= listofRestaurants.filter((res)=> res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                   setFilteredRestrau(FilteredRestaurants);
                }}>Search</button>
               </div>

                <button className="filter-btn" 
                onClick={()=>{
                   const filteredList = listofRestaurants.filter(
                    (res) => res.info.avgRating > 4.6);
                  setFilteredRestrau(filteredList);
                
                }}

                     >

                Top Rated Restaurants

                </button>
               </div>
            <div className="res-container">
           {
           FilteredRestrau.map((restaurant) => (
          <Link  key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id }> < RestaurantCard resData={restaurant}/> </Link> 
           ))
           }
            </div>
        </div>
    )
}
export default Body;