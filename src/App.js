import './App.css';
import Navbar from './Components/Home/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import Project from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import { Route, Router, Routes } from 'react-router-dom'


function App() {
  return (
    <>
 
     <Navbar/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
     <Footer/>
     
       {/* <Routes>
      
            <Route path='/about' Component={About}/>
            <Route path='/skills' Component={Skills}/>
            <Route path='/resume' Component={Resume}/>
            <Route path='/contact' Component={Contact}/>
        
            </Routes> */}
      
    </>
  )
}

export default App;
