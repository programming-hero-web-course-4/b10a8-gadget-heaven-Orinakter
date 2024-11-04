import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Root from './Components/Root/Root.jsx'
import ErrorPage from './Components/Root/ErrorPage/ErrorPage.jsx'
import HomeSection from './Components/Root/HomeSection/HomeSection.jsx'
import FooterSection from './Components/Root/FooterSection/FooterSection.jsx'
import ViewDetails from './Components/Root/ViewDetails/ViewDetails.jsx'


import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<HomeSection></HomeSection>,
        loader:()=>fetch('/categoryData.json')
      },

      {
        path: "/footer",
        element:<FooterSection></FooterSection>,
      },

      {
        path: "/viewdetails/:product_id",
        element:<ViewDetails></ViewDetails>,
        loader:()=>fetch('./gadgetsData.json')
      },
      
    ],
    
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
