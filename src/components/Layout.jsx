import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
    <nav><Navbar /></nav>
    <main>{children}</main>
    <footer><Footer /></footer>
    </>
  )
}

export default Layout