import React from 'react'
//import { NavLink } from 'react-router-dom'
//import { Row, Col } from 'react-bootstrap'
import { FaInstagram, FaTwitter, FaFacebookF, FaUser } from 'react-icons/fa'
import { IoMdGlobe } from 'react-icons/io'

// const activeStyle = {
//     color: 'rgb(187, 46, 31)'
// }

export default function Nav() {
  return (
    <div className='top-navigation nav-bg'>
      <nav className='row space-between nav-bg '>
        {/* pages navigation */}
        <ul className='row nav'>
          {/* logo */}
          <li>
            <img src={'/images/logo.svg'} alt='logo' />
          </li>
          <li>
            <a href='/' className='nav-link'>Home</a>
          </li>
          <li>
            <a href='/' className='nav-link'>About</a>
          </li>
          <li>
            <a href='/' className='nav-link'>Conferences</a>
          </li>
          <li>
            <a href='/' className='nav-link'>Blog</a>
          </li>
          <li>
            <a href='/' className='nav-link'>Contact</a>
          </li>
        </ul>
        {/* social icons */}
        <ul className='row nav right'>
          <li>
            <FaInstagram className='instagram' size={16} />
          </li>
          <li>
            <FaTwitter className='twitter' size={16} />
          </li>
          <li>
            <FaFacebookF className='facebook' size={16} />
          </li>
          <li>
            <IoMdGlobe className='globe'  size={16} />
          </li>
          <li className='user'>
            <FaUser size={16} />
          </li>
        </ul>
      </nav>
    </div>
  )
}