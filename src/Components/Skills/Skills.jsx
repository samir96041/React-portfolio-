import React from 'react'
import '../Skills/Skills.css'
import Html from '../images/html.png'
import Css from '../images/css.png'
import Js from '../images/javascript.png'
import react from '../images/react.png'
import Bootstrap from '../images/bootstrap-logo.png'
import Node from '../images/node.png'
import Mongo from '../images/mongo.png'
import Ex from '../images/expressjs.png'
import Cpp from '../images/cpp2.png'
import Git from '../images/github(1).png'

const Skills = () => {
  return (

    <>
      <div className='mainhead'>


        <div className='heading'>
          <h1 >TECHNICAL SKILLS</h1>
        </div>
        <div className='skills'>
          <div className='Cards' style={{ boxShadow: "white 1px 1px 1px 1px" }}>
            <img src={Html} />
            <p style={{ display: "flex", color: "#fff", position: 'absolute', marginTop: 155 }}>HTML</p>
          </div>
          <div className='Cards'>
            <img src={Css} />
            <p style={{ display: "flex", color: "#fff", position: 'absolute', marginTop: 155 }}>CSS</p>
          </div>
          <div className='Cards'>
            <img src={Js} />
            <p style={{ display: "flex", color: "#fff", position: 'absolute', marginTop: 155 }}>JavaScript</p>
          </div>
          <div className='Cards'>
            <img src={react} />
            <p style={{ display: "flex", color: "#fff", position: 'absolute', marginTop: 155 }}>React.js</p>
          </div>
          <div className='Cards'>
            <img src={Bootstrap} />
            <p style={{ display: "flex", color: "#fff", position: 'absolute', marginTop: 155 }}>BootStarp</p>
          </div>
          <div className='Cards'>
            <img src={Node} />
            <p style={{ display: "flex", color: "#fff", position: 'absolute', marginTop: 155 }}>Node.js</p>
          </div>
          <div className='Cards'>
            <img src={Mongo} />
            <p style={{ display: "flex", color: "#fff", position: 'absolute', marginTop: 155 }}>MongoDB</p>
          </div>
          <div className='Cards'>
            <img src={Ex} />
            <p style={{ display: "flex", color: "#fff", position: 'absolute', marginTop: 155 }}>Express.js</p>
          </div>
          <div className='Cards'>
            <img src={Cpp} />
            <p style={{ display: "flex", color: "#fff", position: 'absolute', marginTop: 155 }}>C++</p>
          </div>
          <div className='Cards'>
            <img src={Git} />
            <p style={{ display: "flex", color: "#fff", position: 'absolute', marginTop: 155 }}>Github</p>
          </div>


        </div>
      </div>
    </>
  )
}

export default Skills