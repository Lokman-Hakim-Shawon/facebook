import { useState } from "react";
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const Subscription = () => {
    const [isYearly,setIsYearly]=useState(false)
    const packages=[
        {object:{list1:'HTML',list2:'CSS',list3:'Tailwing',list4:'JavaScipt'}, name:"Front-End",monthlyprice:9,yearlyprice:99,description:'A common form Lorem ipsum reads lorem ipsum dolar sit amet, consecteture adipiscing alit.'},
        {object:{list1:'Node.js',list2:'Express.js',list3:'MongoDB',list4:'Firebase'},name:"Back-End",monthlyprice:29,yearlyprice:199,description:'A common form Lorem ipsum reads lorem ipsum dolar sit amet, consecteture adipiscing alit.'},
        {object:{list1:'Front-end',list2:'Back-end',list3:'Web Tools',list4:'Web Theory'},name:"Full Proccess",monthlyprice:39,yearlyprice:299,description:'A common form Lorem ipsum reads lorem ipsum dolar sit amet, consecteture adipiscing alit.'},
    ]
    return (
        <>
          <motion.div
          
          variants={fadeIn('left',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:true, amount:0.7}}
           className="md:text-center md:w-1/2 mx-4 md:mx-auto space-y-5 py-5" id='Subscription'>
            <h2 className=" text-2xl text-center md:text-4xl font-bold">Here are our all subscription</h2>
            <p className="text-sm">With a subscription, you’ll have premium access to titles and features across all three of our services,if you need our servies, select a premium.</p>
            <div className="mt-16">
                <label htmlFor='toggle' className="inline-flex items-center cursor-pointer">
                   <span className="mr-8 text-2xl font-semibold text-secondary">Monthly</span>
                   <div className={`w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out`}>
                     <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly? 'bg-pink ml-8':'bg-secondary'}`}></div>
                   </div>
                   <span className="ml-8 text-2xl font-semibold text-pink">Yearly</span>
                </label>
                <input type="checkbox" id='toggle' className="hidden" checked={isYearly} onChange={()=>{setIsYearly(!isYearly)}} />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:w-11/12 mx-auto mb-3">
            {
                packages.map((pkg,index)=><motion.div
                
                variants={fadeIn('up',0.2)}
                initial='hidden'
                whileInView={'show'}
                // viewport={{once:true, amount:0.7}}
                 key={index} className='border py-5 mx-4 md:px-6 px-4 rounded-lg shadow-3xl'>
                    <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                    <p className="text-tartiary text-center my-2 text-sm">{pkg.description}</p>
                    <p className={`text-${isYearly?'pink':'secondary'} font-bold text-center my-1 text-3xl`}>{isYearly?pkg.yearlyprice:pkg.monthlyprice} $</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex"><div className="border-2 bg-green-400 p-1 mx-2"></div>{pkg.object.list1}</li>
                      <li className="flex"><div className="border-2 bg-green-400 p-1 mx-2"></div>{pkg.object.list2}</li>
                      <li className="flex"><div className="border-2 bg-green-400 p-1 mx-2"></div>{pkg.object.list3}</li>
                      <li className="flex"><div className="border-2 bg-green-400 p-1 mx-2"></div>{pkg.object.list4}</li>
                    </ul>
                    <button className="py-2 px-2 bg-secondary text-white rounded-lg w-full mt-5 ">Subscribe</button>
                </motion.div>)
            }
          </div>
    </>
    );
};

export default Subscription;