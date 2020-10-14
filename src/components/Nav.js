import React from 'react'
//import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { FaInstagram, FaTwitter, FaFacebookF, FaUser } from 'react-icons/fa'
import { IoMdGlobe } from 'react-icons/io'

const activeStyle = {
    color: 'rgb(187, 46, 31)'
}

export default function Nav () {
  return (
        <nav className='row space-between nav-bg'>
          <ul className='row nav'>
            <li>
              <img src={require('../images/logo.svg')} />
            </li>
            <li>
              <a href='#' className='nav-link'>Home</a>
            </li>
            <li>
              <a href='#' className='nav-link'>About</a>
            </li>
            <li>
              <a href='#' className='nav-link'>EXPLORE</a>
            </li>
            <li>
              <a href='#' className='nav-link'>BLOG</a>
            </li>
            <li>
              <a href='#' className='nav-link'>CONTACT</a>
            </li>
          </ul>
          <ul className='row nav right'>
            <li>
              <FaInstagram color='#fff' size={20} />
            </li>
            <li>
              <FaTwitter color='#fff' size={20} />
            </li>
            <li>
              <FaFacebookF color='#fff' size={20} />
            </li>
            <li>
              <IoMdGlobe color='#fff' size={20} />
            </li>
            <li>
              <FaUser color='#fff' size={20} />
            </li>
          </ul>
        </nav>
  )
}