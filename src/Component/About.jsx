import "../CSS/About.css"
import profile from "../img/sreevardhan-org1.jpeg" 



function About(){
    return(
        <section id="Home" className="About" aria-label="Home section">
            <div className="About-inner">

            <div className="About-head">
            <h3 className="About-begin"><b>HI,l'm Sreevardhan L M 👋</b></h3>
            <p className="About-sentence">"I’m a JavaScript developer focused on building responsive, user-friendly web applications. Skilled in React, Tailwind CSS, and Node.js, I create full-stack solutions with clean interfaces and scalable backends. My goal is to deliver apps that solve real problems and offer a seamless user experience."</p>
            </div>
            <div className="About-profile">
                <img className="Profile-photo"  src={ profile } alt="profile" />
            </div>
            </div>
        </section>
    )
}

export default About
