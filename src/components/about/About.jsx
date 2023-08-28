import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
            
            </div>
        </div>
        <div className="about_content">
          <div className="about_cards">

          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>300+ Worldwide</small>
          </article>

          <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>25+ completed</small>
          </article>


          </div>
          <p>
          With 3+ years in tech and a focus on financial technology, I've honed my skills at Deloitte and South Indian Bank, a leading private sector bank with over 90 years of legacy. Passionate about crafting intelligent and customer-empowering solutions, I'm driven by creating efficient and responsible innovations.
</p><p>
My journey reflects an ever-growing enthusiasm for merging technology with finance. Working at South Indian Bank provided me insights into blending traditional excellence with cutting-edge solutions. Currently pursuing an MBA in Digital Transformation and Analytics at the University of Ottawa, I'm poised to amplify my strategic thinking and analytical abilities, propelling my career into the dynamic realm of modern business.
</p><p>
As an aspiring product manager, I find my fulfillment in creating products that reshape industries and elevate customer experiences. My diverse background, unwavering zeal, and commitment to innovation empower me to envision and execute impactful ideas. This exciting juncture of technology and business fuels my determination to steer digital solutions toward a future brimming with possibilities.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>   
      
      
      
      </section>
  )
}

export default About