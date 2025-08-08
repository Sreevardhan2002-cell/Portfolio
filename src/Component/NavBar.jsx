
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
                <a href={About} className="navbar-link">Home</a>
                <a href={AboutContent} className="navbar-link">About</a>
                <a href={Skill} className="navbar-link">Skill</a>
                <a href={Project} className="navbar-link">Project</a>
                <a href={Footer} className="navbar-link">contact</a>
            </li>
        </nav>
    )
}



export default NaveBar