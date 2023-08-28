import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1> Aparna Ann Babu</h1>
        <h5 className="text-light">Aspiring Product Manager | Technology Enthusiast | MBA Candidate</h5>
        <CTA />
        <Socials />
       

        <div >
        <img src={ME} alt="me" className="me"/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
        
      </div>

    </header>
  )
}

export default Header