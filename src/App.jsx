import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Homepage from './routes/Homepage'

import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from 'react'

function App() {


  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div className='app'>
      <nav>
        <Navbar />
      </nav>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
