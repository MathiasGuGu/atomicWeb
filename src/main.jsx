import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Habits from './routes/Habits';
import About from './routes/About';
import './index.css'
import Homepage from './routes/Homepage';
import Leaderboard from './routes/Leaderboard';
import Login from './routes/Login';
import Register from './routes/Register';
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Homepage />} />
          <Route path="habits" element={<Habits />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path='*' to="/" />
      </Routes>
    </BrowserRouter>
)
