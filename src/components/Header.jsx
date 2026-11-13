import React from 'react'
import '../App.css'

const Header = () => {
  return (
    <div className='hol-container'>
      <div className='leftside'>
        <h1>LOGO</h1>
        <h1>|</h1>
        <h1>Blog</h1>
        <div className="search-box">
          <input type="text" placeholder="What do you want to read?" />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </div>
      <div className='rightside'>
          <h2 className='sign'>sign in</h2>
      </div>
    </div>
  )
}

export default Header