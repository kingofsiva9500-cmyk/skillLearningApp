import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
const Template = () => {
  return (
    <>
    
      <Header/>
       <NavBar/>

      <Outlet/>
    </>
  )
}

export default Template