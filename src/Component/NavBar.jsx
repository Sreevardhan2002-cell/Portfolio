
import "../CSS/NavBar.css"
import About from "./About"
import AboutContent from "./AboutContent"
import Skill from "./skill"
import Project from "./project"
import Footer from "./Footer"
function NaveBar(){

    const handleToggle = () => {
        // Handle toggle functionality here
        const dropdown = document.querySelector('.nav-dropdown');
        const navLink = document.querySelectorAll('.navbar-link')
        dropdown.style.display = dropdown.style.display === 'none' ? "flex" : 'none';
        navLink.forEach(link =>{
            link.style.display = dropdown.style.display === 'flex' ? 'block' : 'none'
            link.style.flexBasis = dropdown.style.display === 'flex' ? '10.33%' : ''
            link.style.cursor = dropdown.style.display === 'flex' ? 'pointer' : 'default'
        })

    }

    return(
        <nav className="navbar">
            <div className="navbar-head">
                Sreevardhan
            </div>
                <div className="toggle" onClick={handleToggle}>
                <div className="nav-top_line common"></div>
                <div className="nav-middle_line common"></div>
                <div className="nav-bottom_line common"></div>
                </div>
            <li className="navbar-links nav-dropdown">

                <a href={About} className="navbar-link nav-btn">Home</a>
                <a href={AboutContent} className="navbar-link nav-btn">About</a>
                <a href={Skill} className="navbar-link nav-btn">Skill</a>
                <a href={Project} className="navbar-link nav-btn">Project</a>
                <a href={Footer} className="navbar-link nav-btn">contact</a>
            </li>
        </nav>
    )
}



export default NaveBar