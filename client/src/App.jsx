import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import HomePage from './pages/Homepage'

import Websocket from './pages/Websocket'
import RegisPage from './pages/RegistPage'
import Bidding from './pages/Bidding'

const router = createBrowserRouter([
  {
    element : <MainLayout/>,
    children :[
      {
        path: "/", //path
         element: <HomePage/>
       },
      {
        path: "/bidding", //path
         element: <Bidding/>
       },{
        path: "/product/:id", //path
         element: <Websocket/>,
       }
    ],
  },
  {
   path: "/about", //path
    element: <div>Hello world!</div>,
  },
   {
   path: "/regis", //path
    element: <RegisPage/>,
  },

 ])    

 function app(){
     return <RouterProvider router={router} />
 }

 export default app