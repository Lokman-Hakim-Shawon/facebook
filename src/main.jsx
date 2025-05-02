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
import Saved from './pages/homePage/Saved';

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
        element:<Memories/>  
      },
      {
        path:'/saved',
        element:<Saved/>
      },
      {
        path:'/feeds',
        element:<Reels/>
      },
      {
        path:'/adds',
        element:<h1 className='min-h-screen flex justify-center items-center lg:font-bold lg:text-3xl'>no ads active yet</h1>
      },
      {
        path:'/birthdays',
        element:<h1 className='min-h-screen flex justify-center items-center lg:font-bold lg:text-3xl'>your Birthday is 15 December. </h1>
      },
      {
        path:'/climate_science_center',
        element:<h1 className='min-h-screen flex justify-center items-center lg:font-bold lg:text-3xl'>Data not available</h1>
      },
      {
        path:'/fundraisers',
        element:<h1 className='min-h-screen flex justify-center items-center lg:font-bold lg:text-3xl'>Data not available</h1>
      },
      {
        path:'/gaming_video',
        element:<h1 className='min-h-screen flex justify-center items-center lg:font-bold lg:text-3xl'>Data not available</h1>
      },
      {
        path:'/messenger',
        element:<h1 className='min-h-screen flex justify-center items-center lg:font-bold lg:text-3xl'>Data not available</h1>
      },
      {
        path:'/messenger_kids',
        element:<h1 className='min-h-screen flex justify-center items-center lg:font-bold lg:text-3xl'>Data not available</h1>
      },
      {
        path:'/order_and_payment',
        element:<h1 className='min-h-screen flex justify-center items-center lg:font-bold lg:text-3xl'>Data not available</h1>
      },
      {
        path:'/pages',
        element:<h1 className='min-h-screen flex justify-center items-center lg:font-bold lg:text-3xl'>Data not available</h1>
      },
      {
        path:'/play_games',
        element:<h1 className='min-h-screen flex justify-center items-center lg:font-bold lg:text-3xl'>Data not available</h1>
      },
      {
        path:'/recent_ad_activity',
        element:<h1 className='min-h-screen flex justify-center items-center lg:font-bold lg:text-3xl'>Data not available</h1>
      },
      {
        path:'/reels',
        element:<Reels/>
      },
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
