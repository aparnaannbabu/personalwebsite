import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Kiosk Banking - Empowering Customers With Digital Independence',
    content: 'Kiosk Banking Project, uniting hardware and software across 100+ branches. Our kiosk machines redefined banking, offering swift account opening, cheque deposits, complaints, and loan inquiries. We leveraged React JS for the user interface, IIS Manager for backend operations, and Tomcat services for performance. FTP protocols ensured secure data exchange, while strategic API integrations amplified efficiency. The project architecture was designed for scalability, with a robust SQL database poised to manage expanding financial data. Our modular approach and flexible code allow seamless integration of future services, ensuring lasting impact and adaptability in a dynamic banking landscape.',
    github: 'https://www.thehindubusinessline.com/money-and-banking/south-indian-bank-launches-first-digital-banking-unit-in-keralas-thrissur-district/article66017462.ece',
    
  },
    
  {
    id: 2,
    image: IMG2,
    title: 'Revolutionizing Communication: Achievements of the SMS Migration Project',
    content: 'Transformative SMS Migration Project, modernizing from outdated shell scripts to a robust Kafka-driven event streaming architecture, further fortified by Debezium and Podman. The integration of Redis cache and Oracle DB resulted in a remarkable 35% enhancement in processing speed, optimizing efficiency. Real-time monitoring via Elastic and Kibana contributed to an impressive 40% reduction in issue resolution time, underscoring our commitment to reliability. Customers experienced a notable 25% reduction in SMS delivery latency, coupled with an impressive 20% improvement in data accuracy. This migration cements our agile infrastructure, driving 60% faster adaptability and elevating communication efficiency, marking a pivotal advancement in our technological landscape.',
    /* github: 'https://github.com',
  demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualisation' */
  },
  {
    id: 3,
    image: IMG3,
    title: 'Elevating Digital Banking: Enhancements and Innovations in the SIB Mirror+ Mobile App',
    content: 'I spearheaded a transformative project for the "SIB Mirror+" banking mobile application, orchestrating various new feature developments, enhancing existing functionalities, and resolving bug issues. Through 15 iterative versions, we introduced key enhancements such as email ID and personal information updates, foreign outward remittance, account category changes, and even locker availability checks and bill payments. These improvements notably elevated customer engagement and satisfaction. We combined proactive customer response tracking and meticulous market research to shape new features and adaptions. Our constant vigilance was maintained through App Dynamics, ensuring the optimal performance of both Tomcat-powered app and web servers. Our dedication extended to compliance, certifications, server maintenance, and robust disaster recovery setups, cementing our commitment to innovation and operational excellence within the dynamic realm of digital banking under the banner of "SIB Mirror+."',
    github: 'https://www.thehindubusinessline.com/money-and-banking/south-indian-bank-launches-app-based-foreign-outward-remittance/article66080646.ece',
    
  },
  {
    id: 4,
    image: IMG6,
    title: 'Elevating Communication Insights: Unveiling SMS Analytics with Kibana, Elastic, and Kafka',
    content: 'Leading a pivotal SMS analytics initiative, a seamless integration of Kibana and Elastic with Kafka was accomplished. This dynamic configuration enabled real-time monitoring of message delivery metrics, customer engagement trends, and response times, resulting in a 30% improvement in overall communication efficiency. Leveraging Kibana robust data visualization and Elastic powerful search engine capabilities, the team extracted valuable insights into communication patterns, driving a 25% increase in strategic optimization. This innovation streamlined operations and led to a remarkable 40% reduction in customer query resolution times. The collaboration of Kibana, Elastic, and Kafka not only elevated organizational efficiency but also propelled customer satisfaction by 20%. Data-driven decision-making by the team further fortified the project success, driving positive outcomes across all fronts with a notable 15% increase in performance metrics.',

 },
 {
  id: 5,
  image: IMG5,
  title: 'Empowering Accessibility: Crafting a Seamless ATM/CDM Locator Website with React JS and Google APIs',
  content: 'In a collaborative project, I developed a React JS-driven website that facilitates the effortless identification of nearby bank-affiliated ATM/CDM machines. Seamlessly integrated with Google APIs, the platform provides real-time convenience through precise geolocation services. Enhanced by Google Analytics, the website gains valuable insights into user behavior, informing iterative refinements. The user-friendly interface showcases React efficiency, while Google APIs ensure accurate spatial data visualization, substantially improving the overall user experience. This achievement underscores my proficiency in teamwork and technical skills, encompassing React JS, Google API integration, and analytics-driven optimization, ultimately simplifying banking processes for customers.',


}

 
]
const Portfolio = () => {
  return(
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(
                    ({id, image, title, content, github, demo}) => {
                    return (
                             <article key={id} className='portfolio_item'>
                                <div className="portfolio_item-image">
                                   <img src={image} alt="" />
                                </div>
                                <h3><a href={github} target='_blank'> {title}</a></h3>
                                <p className='portfolio_content'>{content}</p>
                                   <div className="portfolio_item-cta">
                                   {/*  <a href={github} className='btn_portfolio' target='_blank'>Link</a>
                                     <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                                    </div>

                             </article>
                            )
                                                          }
                  )
        }
      </div>
    </section>
  )
}

export default Portfolio