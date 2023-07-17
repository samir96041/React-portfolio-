import React from 'react'
import '../Footer/footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer>
            <p> &copy; 2023 CodeBustler. All rights reserved.</p>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/samir-bante-687610233/" target="_blank"><LinkedInIcon className='logos item' /></a>
                <a href="https://www.instagram.com/samir_bante_/" target="_blank">
                    <InstagramIcon className='logos' /></a>
                <a href="https://github.com/samir96041" target="_blank"><GitHubIcon className='logos' /></a>
                <a href="https://www.youtube.com/@codebustler" target="_blank"><i class="fab fa-youtube logos"></i></a>
            </div>
        </footer>
    )
}

export default Footer