import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const homeData =[
    {name:'Friends',path:'/friends'},
    {name:'Memories',path:'/memories'},
    {name:'Saved',path:'/saved'},
    {name:'Groups',path:'/groups',},
    {name:'Videos',path:'/videos',},
    {name:'Marketplace',path:'/marketplace',},
    {name:'Feeds',path:'/feeds',},
    {name:'Adds ',path:'/adds',},
    {name:'Birthdays',path:'/birthdays',},
    {name:'Climate Science Center',path:'/climate_science_center',},
    {name:'Fundraisers',path:'/fundraisers',},
    {name:'Gaming Video',path:'/gaming_video',},
    {name:'Messenger',path:'/messenger',},
    {name:'Messenger Kids',path:'/messenger_kids',},
    {name:'Order And Payments',path:'/order_and_payment',},
    {name:'Pages',path:'/pages',},
    {name:'Play Games',path:'/play_games',},
    {name:'Recent Ad Activity',path:'/recent_ad_activity',},
    {name:'Reels',path:'/reels',},
  ]
  const videoData=[
    {name:'Home',path:'/'},
    {name:'Live',path:'/videos/live'},
    {name:'Reels',path:'/videos/reels'},
    {name:'Shows',path:'/videos/shows'},
    {name:'Explore',path:'/videos/explore'},
    {name:'saved videos',path:'/videos/saveVideos'},
  ]
  const marketplaceData=[
    {name:'Browse All',path:'/marketplace/browse_all'},
    {name:'Notification',path:'/marketplace/notification'},
    {name:'Inbox',path:'/marketplace/inbox'},
    {name:'Marketplace Access',path:'/marketplace/marketplace_access'},
    {name:'Buying',path:'/marketplace/buying'},
    {name:'Selling',path:'/marketplace/selling'},
  ]
  const groupData=[
    {name:'Your Feeds', path:'/groups/your_feeds'},
    {name:'Discover', path:'/groups/discover'},
    {name:'Your Groups', path:'/your_groups'},
  ]
  const gameData=[
    {name:'All Games',path:'/games/all_games'},
    {name:'Action',path:'/games/action'},
    {name:'adventure',path:'/games/adventure'},
    {name:'arcade',path:'/games/arcade'},
    {name:'battle',path:'/games/battle'},
    {name:'board',path:'/games/board'},
    {name:'builder',path:'/games/builder'},
    {name:'card',path:'/games/card'},
    {name:'casino',path:'/game/casino'},
    {name:'design',path:'/game/design'},
    {name:'match',path:'/game/match'},
  ]
const RoutingData = () => {
    const [data,setData]=useState([])
    const location=useLocation()
    const route=location.pathname
   useEffect(()=>{
    if(route==='/videos'){
        setData(videoData)
    }
    else if(route==='/marketplace'){
        setData(marketplaceData)
    }
    else if(route==='/groups'){
        setData(groupData)
    }
    else if(route==='/games'){
        setData(gameData)
    }
    else {
        setData(homeData)
    }

   },[route]) 
   return data
};
export default RoutingData;