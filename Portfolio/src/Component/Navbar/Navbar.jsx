import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <div className='navbar'>
      <div className="nav-option">
        
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/skill'>Skill</Link></li>
          <li><Link to='/project'>Project</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar