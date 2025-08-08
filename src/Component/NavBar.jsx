
import "../CSS/NavBar.css"
import About from "./About"
import AboutContent from "./AboutContent"
import Skill from "./skill"
import Project from "./project"
import Footer from "./Footer"
function NaveBar(){
    return(
        <nav className="navbar">
            <div className="navbar-head">
                Sreevardhan
            </div>
            <li className="navbar-links">
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