import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'

function App() {
  
  return (
    
      <div className='container'>
       <Navbar/>
       <Sidebar/>
       <Footer/>
       
      </div>
      
    
  )
}

export default App
