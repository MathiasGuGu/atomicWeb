import React,  {useContext} from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'

const About = () => {
    const value = useContext(UserContext)
    return (
    <div>
      <Layout></Layout>
    </div>
  )
}

export default About