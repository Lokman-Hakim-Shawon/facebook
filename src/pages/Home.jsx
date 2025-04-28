import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/public/homeApi.json')
        .then(res=>res.json())
        .then(json=>setData(json))
        .catch(err=>console.log("error fetching",err))
    },[])
    return (
        <div className='h-full lg:flex lg:justify-between border-2 text-white '>
        <div className='lg:h-screen overflow-y-auto w-full'>
     {data.map((post, index) => (
         <div key={index} className=' lg:m-5   lg:mx-32 bg-gradient-to-r from-primary to-secondary mb-4'>
             <div className='lg:p-4'>
             <div className='flex items-center'>
             <img src={post.profile_pic} alt={`${post.name}'s profile`} width="50" className='p-2 rounded-full'/>
             <h3 className='font-bold'>{post.name}</h3>
             </div>
             <p>{post.title}</p>
             </div>
             <div>
             <img src={post.post_image} alt="Post"  className='w-full '/>
             </div>
             <div className='flex justify-between p-5'>
                 <h1 className="">like</h1>
                 <h1 className="">comment</h1>
                 <h1 className="">share</h1>
             </div>
         </div>
     ))}
 </div>
 
 </div> 
    );
};

export default Home;