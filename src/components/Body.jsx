import { useState , useEffect} from "react";
import resList from "../utils/resListIgnore";
import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";


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


const onlineStatus = useOnlineStatus();
if(onlineStatus === false) {
    return <div user className="status">
<h1> You are offline :\ </h1>
    </div> 
}




//Conditional Renedering
if(listofRestaurants.length===0){
    return(
        <Shimmer/>
    )
}

    return(
        <div className="body">
            <div className ="filter flex border border-black my-1.5">
               <div className="m-2 p-2 pl-4">
                <input  className=" border border-black px-1"
                type ="text" value={SearchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                    
                }}
                ></input>
               
                <button className="px-4 py-1.5 m-4 bg-green-100 rounded-lg"
                 onClick={()=>{
                   const FilteredRestaurants= listofRestaurants.filter((res)=> res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                   setFilteredRestrau(FilteredRestaurants);
                }}>Search</button>
              
               
               </div>

               <div className="flex items-center m-4 p-4">
               <button className="filter-btn px-4 py-1.5 bg-blue-200 rounded-lg" 
                onClick={()=>{
                   const filteredList = listofRestaurants.filter(
                    (res) => res.info.avgRating > 4.3);
                  setFilteredRestrau(filteredList);
                
                }}

                     >

                Top Rated Restaurants

                </button>
               </div>
               </div>
            <div className="flex flex-wrap">
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