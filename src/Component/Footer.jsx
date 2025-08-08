import Insta from '../img/contact/instagram.png'
import Github from '../img/contact/github-logo.png'
import mail from '../img/contact/mail-logo.png'
import "../CSS/Footer.css"

function Footer(){
    return(
        <div className="Footer">
            <div className="Footer-Icons">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img className='Footer-Insta' src={Insta} alt="Instagram" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <img className='Footer-GitHub' src={Github} alt="Github" />
                </a>
                <a href="mailto:lmsreevardhan@gmail.com">
                    <img className='Footer-Mail' src={mail} alt="Email" />
                </a>

            </div>
            <div className='Footer-Text'>
                <p>Copyright © <a href="">Sreevardhan</a> 2025</p>
            </div>
        </div>
    )
}

export default Footer;  