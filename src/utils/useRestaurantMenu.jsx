import { useEffect,useState } from "react";


const useRestaurantMenu = (resId) =>{
    const [resInfo,setresInfo] = useState(null);
    
    
        useEffect(() => {
        fetchMenu();
   },[])

   const fetchMenu = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7243651&lng=83.4296686&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
   ;
   const json = await data.json();

   console.log(json);
   setresInfo(json.data);
  
   }
   return resInfo;
}
export default useRestaurantMenu;