
import React from "react";
import "../CSS/NavBar.css"
import { Link } from "react-router-dom";
import About from "./About"
import AboutContent from "./AboutContent"
import Skill from "./skill"
import Project from "./project"
import Footer from "./Footer"
function NaveBar(){

    const [open,setopen]=React.useState(false);

    const handleToggle = () => {
        setopen(!open);
        // Handle toggle functionality here
    
        // const slide= style.width('500px')
        // if(window.matchMedia("(max-width: 500px)").matches){
        // const dropdown = document.querySelector('.nav-dropdown');
        // const navLink = document.querySelectorAll('.nav_drop-link');
        
        //     dropdown.style.display = dropdown.style.display === 'none' ? "flex" : 'none';

        //     navLink.forEach(link =>{
        //         link.style.display = dropdown.style.display === 'flex' ? 'block' : 'none'
        //         link.style.flexBasis = dropdown.style.display === 'flex' ? '10.33%' : ''
        //         link.style.cursor = dropdown.style.display === 'flex' ? 'pointer' : 'default'
        //     })

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
            <ul className={`navbar-links nav-dropdown${open ? " open" : ""}`}>

                <li>
                    <a href='#Home' to="/" className="navbar-link nav_drop-link nav-btn">Home</a>
                </li>
                <li>
                    <a href='#About' to="/about" className="navbar-link nav_drop-link nav-btn">About</a>
                </li>
                <li>
                    <a href="#Skill" to="/skill" className="navbar-link nav_drop-link nav-btn">Skill</a>
                </li>
                <li>
                    <a href="#Project" to="/project" className="navbar-link nav_drop-link nav-btn">Project</a>
                </li>
                <li>
                    <a href="#Footer" to="/contact" className="navbar-link nav_drop-link nav-btn">contact</a>
                </li>
            </ul>
        </nav>
    )
}



export default NaveBar