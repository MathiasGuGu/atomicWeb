import React, { createContext, useState } from 'react'
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Habits from '../routes/Habits';
import About from '../routes/About';
import '../index.css'
import Homepage from '../routes/Homepage';
import Leaderboard from '../routes/Leaderboard';
import Login from '../routes/Login';
import Register from '../routes/Register';
import { UserContext } from '../context/UserContext';
import Navbar from './Navbar';
import Profile from '../routes/Profile';



const AppRouter = () => {

    const [value, setValue] = useState(0)

  return (
    <>
      <BrowserRouter >
        <UserContext.Provider value={[value, setValue]}>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path="habits" element={<Habits />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path='*' to="/" />
        </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  </>
  )
}

export default AppRouter