import React from 'react'
import '../Projects/Project.css'
import ss from '../images/ss.png'
import ss2 from '../images/ss2.png'
import ss3 from '../images/ss3.png'
import LinkIcon from '@mui/icons-material/Link';
import { Link } from '@mui/material'
const Project = () => {
  return (

    <>

      <div className='project'>
        <div className='head'><h1>Projects</h1></div>
      </div>

      <div className='cards'>
        <div class="card">
          <div class="card-image"><img src={ss} /></div>
          <p class="card-title">Portfolio using React</p>
          <p class="card-body" style={{color:"black"}}>
          Using React, I've created this portfolio to showcase my skills, projects, and achievements. I've carefully crafted each component of this portfolio...

          </p>
          <Link href="" className='link' target="_self" >
            <LinkIcon />
          </Link>


        </div>
        <div class="card">
          <div class="card-image"><img src={ss2} /></div>
          <p class="card-title">Hospital Website</p>
          <p class="card-body" style={{color:"black"}}>
          a carefully designed online platform created using HTML and CSS.  I've developed this website to provide user-friendly experience...

          </p>
          <Link href="https://samir96041.github.io/Hospital-Website/" className='link' target="_self" >
            <LinkIcon />
          </Link>
        </div>
        <div class="card">
          <div class="card-image"><img src={ss3} /></div>
          <p class="card-title">Banking System</p>
          <p class="card-body" style={{color:"black"}}>
          I have developed a secure and user-friendly platform using PHP and MySQL to provide you with a seamless banking experience...

          </p>
          <Link href="https://sialagogic-eggs.000webhostapp.com/" className='link' target="_self" >
            <LinkIcon />
          </Link>

        </div>

      </div>



    </>
  )

}

export default Project