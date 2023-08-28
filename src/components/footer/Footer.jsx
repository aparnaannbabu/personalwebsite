import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Aparna Ann Babu</a>

      <ul className='footer_links'>
        <li>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>

        </li>

      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com" target='_blank'><FaFacebook/></a>
        <a href="https://instagram.com" target='_blank'><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/aparnaannbabu/" target='_blank'><AiOutlineLinkedin/></a>

      </div>

      <div className="footer_copyright">
        <small>&copy; Aparna Ann Babu. All rights reserved.</small>
      </div>

    </footer>
      

    
  )
}

export default Footer