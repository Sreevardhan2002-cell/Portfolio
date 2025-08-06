
import "../CSS/NavBar.css"

function NaveBar(){
    return(
        <nav className="navbar">
            <div className="navbar-head">
                Sreevardhan
            </div>
            <li className="navbar-links">
                <a href="#home" className="navbar-link">Home</a>
                <a href="#about" className="navbar-link">About</a>
                <a href="#priject" className="navbar-link">Project</a>
                <a href="#contect" className="navbar-link">contact</a>
            </li>
        </nav>
    )
}



export default NaveBar