import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Videos from './pages/Videos.jsx';
import MarketPlace from './pages/MarketPlace.jsx';
import Groups from './pages/Groups.jsx';
import Games from './pages/Games.jsx';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/videos',
        element:<Videos/>
      },
      {
        path:'/marketplace',
        element:<MarketPlace/>
      },
      {
        path:'/groups',
        element:<Groups/>
      },
      {
        path:'/games',
        element:<Games/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
