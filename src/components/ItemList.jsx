import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
 const ItemList = ({items})=>{
     
     const dispatch = useDispatch();
      
      const handleAdditems= (item)=>{
           dispatch(addItems(item));
      }


    return (
<div>
    {items.map((item) => (
    <div
    key={item.card.info.id}
    className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between" 
    >     
        <div className="w-9/12">
        <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>- 💸 {item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
        </div>
        <p className="text-xs">{item.card.info.description}</p>
        </div>
      
      <div className="w-3/12 p-4">
            <img 
             src={CDN_URL + item.card.info.imageId} 
             alt={item.card.info.name} 
             className="w-full rounded-lg"/>
             <button
              className="p-2 m-auto bg-white text-green-500 shadow-2xl rounded-xl cursor-pointer"

              onClick={() => handleAdditems(item)}

              >Add +</button>
        </div>
    </div>
         ))}
</div>
    );
};
export default ItemList;