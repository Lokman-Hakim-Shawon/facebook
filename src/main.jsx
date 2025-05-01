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
import Live from './pages/videosPage/Live';
import Reels from './pages/videosPage/Reels';
import Friends from './pages/homePage/Friends';
import Memorise from './pages/homePage/Memories';
import Memories from './pages/homePage/Memories';

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
        element:<Videos/>,
      },
      {
        path:'/live',
        element:<Live />
      },
      {
        path:'/reels',
        element:<Reels/>
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
      },
      {
        path:'/friends',
        element:<Friends/>
      },
      {
        path:'/memories',
        element:<Memories/>      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
