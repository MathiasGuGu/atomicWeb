import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Habits from './routes/Habits';
import About from './routes/About';
import './index.css'
import Homepage from './routes/Homepage';
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="habits" element={<Habits />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
)
