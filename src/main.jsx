import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Root from './Components/Root/Root.jsx'
import ErrorPage from './Components/Root/ErrorPage/ErrorPage.jsx'
import HomeSection from './Components/Root/HomeSection/HomeSection.jsx'


import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FooterSection from './Components/Root/FooterSection/FooterSection.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<HomeSection></HomeSection>,
      },

      {
        path: "/footer",
        element:<FooterSection></FooterSection>,
      },
      
    ],
    
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
