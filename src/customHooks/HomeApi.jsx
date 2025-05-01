import React, { useEffect, useState } from 'react';
import useHomeApi from './useHomeApi';

const HomeApi = ({apiData}) => {
    const api=useHomeApi(apiData)
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(api)
        .then(res=>res.json())
        .then(json=>setData(json))
        .catch(err=>console.log("error fetching",err))
    },[])
    return (
        <div className='h-full lg:flex lg:justify-between border-2'>
        <div className='lg:h-screen overflow-y-auto w-full'>
     {data.map((post, index) => (
         <div key={index} className=' lg:m-5 lg:mx-32 mb-4 bg-white rounded-xl h-full'>
             <div className='lg:p-4'>
             <div className='flex items-center py-4'>
             <img src={post.profile_pic} alt={`${post.name}'s profile`} width="50" className='p-2 rounded-full'/>
             <h3 className='font-bold'>{post.name}</h3>
             </div>
             <p className='pb-2'>{post.title}</p>
             </div>
             <div className='h-2/3'>
             <img src={post.post_image} alt="Post"  className='w-full h-full'/>
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

export default HomeApi;