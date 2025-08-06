import "../CSS/About.css"
import profile from"../img/sreevardhan.jpg"


function About(){
    return(
        <div className="About">
            <div className="About-head">
            <h3 className="About-begin"><b>HI,l'm Sreevardhan L M 👋</b></h3>
            <p className="About-sentence">"i'm a JavaScript developer who enjoys creating web applications that are both functional and user-friendly. I love turning ideas into real projects and always look for ways to improve my skills through hands-on experience.

Currently, I'm focused on frontend development and exploring tools like HTML, CSS, JavaScript, and React. My goal is to build apps that solve real problems and make a positive impact."</p>
            </div>
            <div className="About-profile">
                <img className="Profile-photo"  src={ profile } alt="profile" />
            </div>
        </div>
    )
}

export default About
