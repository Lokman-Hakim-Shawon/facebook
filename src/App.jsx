
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className='flex flex-col'>
    <Navbar/>
    <div className='pt-24 lg:pt-12'>
    <Outlet/>
    </div>
    
    </div>
  )
}

export default App
