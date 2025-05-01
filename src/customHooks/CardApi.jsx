import React, { useEffect, useState } from 'react';
import useCardApi from './useCardApi';

const CardApi = ({cardApi}) => {
    const api=useCardApi(cardApi)
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(api)
        .then(res=>res.json())
        .then(json=>setData(json))
        .catch(err=>console.log("error fetching",err))
    },[])
    return (
        <div className='h-full '>
            <div className='lg:h-screen overflow-y-auto w-full grid grid-cols-2 lg:grid-cols-3 '>
             {data.map((post, index) => (
                <div key={index} className=' h-full lg:p-2 m-1 flex flex-col'>
                   <div className='h-full lg:max-h-[70%] '><img src={post.img} alt="Post"  className='w-full min-h-full rounded-xl'/></div>
                   <div className='min-h-[30%] py-2'>
                    <p className="text-xs ">৳{post.price}<span className='lg:hidden'> - {post.title}</span></p>
                    <h1 className="text-lg hidden lg:block">{post.title}</h1>
                    <p className="text-xs hidden lg:block">Address : {post.address}</p>
                   </div>
                </div>
              ))}
            </div>
        </div> 
    );
};

export default CardApi;