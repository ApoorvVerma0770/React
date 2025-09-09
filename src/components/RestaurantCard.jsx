import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {

    const {cuisines,deliveryTime,avgRating,name,cloudinaryImageId,costForTwo}=resData?.info;
    return (
    <div className="m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200   flex flex-col">

        <img className="res-logo rounded-lg w-full h-32 object-cover"
        alt="res-logo"
         src={CDN_URL+cloudinaryImageId}/>
          <div className="flex-1 mt-2">
          <h3 className="font-bold text-lg py-3">{name}</h3>
          <h4 className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</h4>
          </div>
          <div className="mt-auto text-sm text-gray-700">
          <h4>{avgRating}</h4>
          <h4>{deliveryTime}</h4>
          <h4>{costForTwo}</h4>
          </div>
       
    </div>
    );
};



 export const withPromotedLabel= (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg text text-xs">Opened</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
 }
export default RestaurantCard;