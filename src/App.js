import React, {lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const Applayout = () => {
  
    const[UserName,setUserName]=useState();

     useEffect(()=>{
        const data = {
            name: "Apoorv",
        };
        setUserName(data.name);
     },[])






    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInInfo : UserName , setUserName}}>
           <div className ="App">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
       
    )
}




const appRouter = createBrowserRouter([
    {
    path:"/",
    element :<Applayout/>,
    errorElement : <Error /> ,
    children : [
            {
            path:"/",
            element :<Body/>,
            },
            {
            path:"/about",
            element :<About />,
            },
            ,
            {
            path:"/grocery",
            element :<Suspense fallback={<Shimmer></Shimmer>}><Grocery /></Suspense>,
            },
            {
            path:"/contact",
            element :<Contact/>,
            },
            {
                path:"/cart",
                element:<Cart/>
            }
            ,
            {
                path:"/restaurants/:resId",
                element :<RestaurantsMenu/>,
                }
    ]
    },
    
])



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);