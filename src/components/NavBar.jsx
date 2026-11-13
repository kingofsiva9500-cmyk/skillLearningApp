import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='nav-holcontainer'>
      <button
        className='nav-menu-button'
        type='button'
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls='primary-navigation'
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? '×' : '☰'}
      </button>
      <div id='primary-navigation' className={`nav-top${isMenuOpen ? ' is-open' : ''}`}>
        <Link to='/' onClick={() => setIsMenuOpen(false)}>All</Link>
        <Link to='/fullStack' onClick={() => setIsMenuOpen(false)}>FullStack Development</Link>
        <Link to='/datascience' onClick={() => setIsMenuOpen(false)}>DataScience</Link>
        <Link to='/cybersecurity' onClick={() => setIsMenuOpen(false)}>CyberSecurity</Link>
        <Link to='/ai' onClick={() => setIsMenuOpen(false)}>AI</Link>
      </div>
      <hr />
    </div>
  )
}

export default NavBar