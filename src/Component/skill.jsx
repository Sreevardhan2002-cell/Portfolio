import "../CSS/Skill.css"
import "../CSS/AboutContent.css"

function Skill(){
    return(
        <div id="Skill" className="Skill-Section">
            <div className="Skill-banner">
                <h4 className="Heading">Skill...</h4>
                <ul className="Skill-Display">
                <li className="Skill-box">Software Developer</li>
                <li className="Skill-box">Javascript</li>
                <li className="Skill-box">React</li>
                <li className="Skill-box">Problem Solving</li>
                <li className="Skill-box">Tailwind CSS</li>
                <li className="Skill-box">Node.js</li>
                <li className="Skill-box">Git & GitHub</li>
                <li className="Skill-box">REST APIs</li>
                </ul>
            </div>
        </div>
    )
}

export default Skill