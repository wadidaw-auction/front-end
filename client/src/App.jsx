import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import HomePage from './pages/Homepage'

const router = createBrowserRouter([
  {
    element : <MainLayout/>,
    children :[
      {
        path: "/", //path
         element: <HomePage/>
       },
    ],
  },
  
 
  {
   path: "/about", //path
    element: <div>Hello world!</div>,
  },
 ])    

 function app(){
     return <RouterProvider router={router} />
 }

 export default app