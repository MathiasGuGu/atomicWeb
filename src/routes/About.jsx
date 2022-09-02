import React,  {useContext} from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'

const About = () => {
    const value = useContext(UserContext)
    return (
    <div>
        <Navbar streak={value} />
    </div>
  )
}

export default About