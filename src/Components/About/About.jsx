import React from 'react'
import '../About/About.css'
import pdf from '../images/samirbante.pdf'

const About = () => {
  return (
    <>
      <div className='cont'>
        <div className='about'>
          <h1>ABOUT</h1>
        </div>
        <div className='para'>
          <p>"Welcome to my portfolio! I am a skilled and dedicated Full Stack MERN (MongoDB, Express, React, Node.js) Developer, passionate about crafting robust and scalable web applications. <br /> On the front-end, I have expertise in HTML, CSS, and JavaScript, and I am proficient in utilizing modern front-end frameworks such as React to create dynamic and interactive user interfaces.
            <br /> <br />
            <span>If you are seeking a Full Stack MERN Developer who can bring your ideas to life and deliver seamless web applications, I would love to discuss how we can collaborate on your next project. Feel free to reach out to me, and let's build something amazing together."</span>
          </p>
        </div>
        <div className='but'>
        <a href={pdf} download={pdf}>
          <button className="button-85 i-button" role="button">  Resume</button></a>
          
        </div>
      </div>
    </>
  )
}

export default About