import React, { useContext, useEffect } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'
const Homepage = () => {
  const [value, setValue] = useContext(UserContext)


  return (
      <>
      <Layout>
        <Hero></Hero>
      </Layout>
      </>
  )
}

export default Homepage