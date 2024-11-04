import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Components/Root/Root.jsx'
import App from './App.jsx'
import ErrorPage from './Components/Root/ErrorPage/ErrorPage.jsx'
import HomeSection from './Components/Root/HomeSection/HomeSection.jsx'
import ViewDetails from './Components/Root/ViewDetails/ViewDetails.jsx'



import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Components/Root/Statistics/Statistics.jsx'
import Dashboard from './Components/Root/Dashboard/Dashboard.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<HomeSection></HomeSection>,
        loader:()=>fetch('../categoryData.json')
      },

      {
        path: "/statistics",
        element:<Statistics></Statistics>,
        
      },

      {
        path: "/dashboard",
        element:<Dashboard></Dashboard>,
        
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
