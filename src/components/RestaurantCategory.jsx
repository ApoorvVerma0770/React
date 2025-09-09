import ItemList from "./ItemList";
import { useState } from "react";


const RestaurantCategory=({data , showItems , setShowIndex })=>{
     
    const handleclick = () => {
      setShowIndex(showItems);
    }
     

    return (
        <div>
            {/* Header */}
        <div className="w-6/12 m-auto bg-gray-100 shadow-lg my-4 p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleclick}>
        <span className="font-bold">{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
          {showItems && <ItemList items={data.itemCards}/>}
        </div>
        {/*Accordian*/}
        </div>
        
    )
}
export default RestaurantCategory;