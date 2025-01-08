import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout1 from './component/Layout1/Layout1';
import Home1 from './component/Home1/Home1';
import About1 from './component/About/About1';
import Contact2 from './component/Contact/Contact2';
import Portofile from './component/Portofile/Portofile';



const routers = createBrowserRouter([

 
  {path:'',element:<Layout1/> , children:[
    {path:'home',element:<Home1/>},
    {path:'about',element:<About1/>},
    {path:'contact',element:<Contact2/>},
    {path:'Portofile',element:<Portofile/>},
    {path:'',element:<Home1/>}
  ]}
])

export default function App(){
  return <>
  
  <RouterProvider router={routers}/>
  
  
  
  
  </>
}
