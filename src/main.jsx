import React, { createContext } from 'react'
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
import { UserContext } from './context/UserContext';
import AppRouter from './components/AppRouter';




ReactDOM.createRoot(document.getElementById('root')).render(
  <AppRouter/>
)

