import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import CreateUser from './CreateUser'
import Navbar from './Navbar'
import UpdateUser from './UpdateUser'
import User from './User'

const Page6 = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/'  element={<User/>}/>
            <Route path='createuser' element={<CreateUser/>}/>
            <Route path='updateuser' element={<UpdateUser/>}/>
        </Routes>
        
        </BrowserRouter>
      
    </div>
  )
}

export default Page6
