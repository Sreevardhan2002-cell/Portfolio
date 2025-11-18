import Insta from '../img/contact/instagram.png'
import Github from '../img/contact/github-logo.png'
import mail from '../img/contact/mail-logo.png'
import "../CSS/Footer.css"

function Footer(){
    return(
        <footer id='Footer' className="Footer">
            <div className="Footer-Icons">
                <a href="https://www.instagram.com/titan_king_0/" target="_blank" rel="noopener noreferrer">
                    <img className='Footer-Insta' src={Insta} alt="Instagram" loading='lazy'/>
                    <span className="sr-only">Instagram</span>

                </a>
                <a href="https://github.com/Sreevardhan2002-cell" target="_blank" rel="noopener noreferrer">
                    <img className='Footer-GitHub' src={Github} alt="Github" loading='lazy'/>
                    <span className="sr-only">Github</span>
                </a>
                <a href="mailto:lmsreevardhan@gmail.com">
                    <img className='Footer-Mail' src={mail} alt="Email" loading='lazy'/>
                    <span className="sr-only">Email</span>
                </a>

            </div>
            <div className='Footer-Text'>
                <p>Copyright ©{new Date().getFullYear()} <a href="" aria-label="Go to top">Sreevardhan</a></p>
            </div>
        </footer>
    )
}

export default Footer;  