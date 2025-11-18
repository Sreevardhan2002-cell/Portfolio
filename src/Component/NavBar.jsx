
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

    const handleToggle = () => setopen(open => !open);

        React.useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 768) setopen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
        const closeAndScroll = (e, id) => {
        setopen(false);
        }

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

    

    return(
        <nav className="navbar" role="navigation" aria-label="Main Navigation">
            <div className="navbar-head">
                Sreevardhan
            </div>
                <button className={`toggle ${open ? "is-open" : ""}`} aria-controls="primary-navigation" aria-expanded={open} onClick={handleToggle} aria-label={open ? "Close menu" : "Open menu"}>
                <span className="nav-top_line common" />
                <span className="nav-middle_line common" />
                <span className="nav-bottom_line common" />
                </button>
            <ul id="primary-navigation" className={`navbar-links nav-dropdown${open ? " open" : ""}`}>

                <li>
                    {/* <a href='#Home' to="/" className="navbar-link nav_drop-link nav-btn">Home</a> */}
                    <a href="#Home" className="navbar-link" onClick={(e) => closeAndScroll(e, "Home")}>Home</a>
                </li>
                <li>
                    <a href="#About" className="navbar-link" onClick={(e) => closeAndScroll(e, "About")}>About</a>

                </li>
                <li>
                    <a href="#Skill" className="navbar-link" onClick={(e) => closeAndScroll(e, "Skill")}>Skill</a>
                </li>
                <li>
                    <a href="#Project" className="navbar-link" onClick={(e) => closeAndScroll(e, "Project")}>Project</a>
                </li>
                <li>
                    <a href="#Footer" className="navbar-link" onClick={(e) => closeAndScroll(e, "Footer")}>contact</a>
                </li>
            </ul>
        </nav>

    );
}



export default NaveBar