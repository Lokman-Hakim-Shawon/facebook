import React, { useEffect, useState } from 'react';

const Reels = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/videoapi.json')
        .then(res=>res.json())
        .then(json=>setData(json))
        .catch(err=>console.log("error fetching",err))
    },[])
    return (
        <div className='h-full lg:flex lg:justify-between border-2'>
        <div className='lg:h-screen overflow-y-auto w-full'>
     {data.map((post, index) => (
         <div key={index} className=' lg:m-5 lg:mx-64 mb-2 bg-white rounded-xl h-full'>
             <img src={post.post_image} alt="Post"  className='w-full h-[100vh] lg:h-[100vh]'/>
         </div>
     ))}
 </div>
 
 </div> 
    );
};

export default Reels;