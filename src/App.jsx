
import { Outlet} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import SideBar from './customHooks/SideBar'
import { useState } from "react";
import RoutingData from './components/RoutingData'

function App() {
             const data=RoutingData()
  const [click,setClick]=useState(true)
    const button=(value)=>{
        setClick(value)
    }
  return (
    <div className='flex flex-col bg-slate-200'>
    <Navbar click={button}/>
    <div className='pt-24 lg:pt-12 h-full w-full lg:flex lg:justify-between'>
    <div className={`${click===true? 'hidden lg:block':''} fixed w-1/2 lg:w-2/6 top-11 lg:top-13 h-[calc(100vh)] bg-gradient-to-r from-primary to-secondary overflow-auto`}>
      <SideBar routingData={data} />
    </div>
    <div className='lg:ml-[33%] lg:w-4/6 lg:pl-4 h-[100vh]'>
    <Outlet/>
    </div>
    </div>
    
    </div>
  )
}

export default App
