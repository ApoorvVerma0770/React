import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  
  
    const cartItems=useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
        

     return (
        <div className="text-center m-5 p-5">
        <h1 className="text-2xl font-bold p-2 ">Cart</h1>
        <div className="w-6/12 m-auto">
        <button  className="rounded-lg bg-black text-white p-2 m-2 text-sm cursor-pointer"
         onClick={handleClearCart}
        >
       Clear Cart
        </button>
        {cartItems.length === 0 && <h3 className="p-3 m-3 font-bold">"You look hungry why don't you add something to the cart"</h3>}
            <ItemList items={cartItems}/>
        </div>
        </div>
)} ;
export default Cart;