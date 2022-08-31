import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Footer />
    </div>
  )
}

export default Homepage