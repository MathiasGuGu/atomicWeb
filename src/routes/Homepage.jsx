import React, { useContext, useEffect } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'
const Homepage = () => {
  const [value, setValue] = useContext(UserContext)

  useEffect(() =>{
    setValue(val => val + 1)
  },[value])
  return (
      <>
        <Navbar streak={value}/>
          <Hero />
        <Footer />
      </>
  )
}

export default Homepage