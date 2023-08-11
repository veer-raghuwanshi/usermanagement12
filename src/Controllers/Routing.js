import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Admin from './Admin'
import User from './User'
import ManageUsers from './ManageUsers'
import EditProfile from './EditProfile'
export default function Routing() {
  return (
    <div>
         <Router>
            <Routes>
                <Route path='/' element={<Login />}>
                </Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/admin' element={<Admin />}></Route>
                <Route path='/user' element={<User />}></Route>
                <Route path='/manageusers' element={<ManageUsers />}></Route>

                <Route path='/editprofile' element={<EditProfile />}></Route>
            </Routes>
         </Router>
    </div>
  )
}
