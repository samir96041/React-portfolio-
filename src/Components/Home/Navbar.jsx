import React, { useEffect, useState } from "react";
import '../Home/Navbar.css'
import { FaBars } from 'react-icons/fa'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Github from '../images/github.png'
import Linkedin from "../images/linkedin(1).png"
import Instagram from "../images/instagram.png"
import Image from '../images/sam1.png'
import { Link } from 'react-scroll'


const Navbar = () => {

    const [mobile, setMobile] = useState(false)
    const closeMenu = () => {
        setMobile(false);
    };
    return (
        <>

            <nav className="main-menu">
                <div className="logo">
                    <h2>SB</h2>
                </div>
                <ul className={mobile ? "mobile-menu" : "nav-links"} onClick={() => setMobile(false)}>
                    {/* <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about' exact>
                        <li>About</li>
                    </Link>
                    <Link to='/skills'>
                        <li>Skills</li>
                    </Link>
                    <Link to='/resume'>
                        <li>Resume</li>
                    </Link>
                    <Link to='/contact'>
                        <li>
                            <button className="button-85" role="button">Contact</button></li>
                    </Link> */}


                    <li> <Link offset={-200} to="sec2" smooth={true} duration={500} onClick={closeMenu} >
                        Home
                    </Link></li>
                    <li><Link offset={-200} to="about" smooth={true} duration={500} onClick={closeMenu}>
                        About
                    </Link></li>
                    <li><Link offset={-250} to="skills" smooth={true} duration={500} onClick={closeMenu} >
                        Skills
                    </Link></li>
                    <li> <Link offset={1} to="project" smooth={true} duration={500} onClick={closeMenu}>
                        Project
                    </Link></li>
                    <li>
                        <Link offset={250} to="sec1" smooth={true} duration={500} onClick={closeMenu}>
                            <button type="submit" value="Send" className='button-85 sam'>Contact</button>
                        </Link>
                    </li>
                </ul>


                <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
                    {mobile ? <CloseIcon /> : <MenuIcon />}

                </button>

            </nav>


            {/* Hero section*/}

            <div className="sec2">

                <div className="Hero-sec">

                    <div className="left">

                        <div className='i-name'>
                            <h3>
                                HI I'm
                            </h3>
                            <h1>Samir Bante</h1>
                            <h3>Web Developer</h3>
                            <p>  "Full Stack Web Developer (MERN) | Creating Innovative and User-Friendly Web Solutions"</p>


                            <Link offset={250} to="sec1" smooth={true} duration={500} onClick={closeMenu}>
                                <button type="submit" value="Send" className='button-85 sam' style={{display:"flex", alignItems:"center",justifyContent:"center"
                               }}>Hire me</button>
                        </Link>


                        <div className='i-icons'>

                            <a href="https://github.com/samir96041" target="_blank">
                                <img src={Github} alt="">
                                </img>
                            </a>
                            <a href="https://www.linkedin.com/in/samir-bante-687610233/" target="_blank">
                                <img src={Linkedin} alt="" />
                            </a>
                            <a href="https://www.instagram.com/samir_bante_/" target="_blank">
                                <img src={Instagram} alt="" />
                            </a>
                        </div>
                    </div>


                </div>
                <div class="right">

                    {/* Glowing circle */}

                    <div className='i-right'>
                        <div className='glowing-circle'>

                            <div className='glowing-circle2'>
                                <div className='image'>
                                    <img src={Image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Navbar
