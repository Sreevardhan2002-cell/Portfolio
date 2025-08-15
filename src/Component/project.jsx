import "../CSS/project.css"
import "../CSS/AboutContent.css"
import Forkify from "../img/Forkify.png"
import React, { useState } from "react"
import MovieApp from "../img/Movie-App.jpg"

function Project(){
    const slides = [Forkify, MovieApp];
    const [curSlide, setCurSlide] = useState(0);

    const maxSlide = slides.length;

    const nextSlide = () => {
        setCurSlide(curSlide === maxSlide - 1 ? 0 : curSlide + 1);
    };

    const prevSlide = () => {
        setCurSlide(curSlide === 0 ? maxSlide - 1 : curSlide - 1);
    };

    return (
        <div id="Project" className="Project-Section">
            <div className="Project-banner">
                <h4 className="Heading">Project...</h4>
                <div className="Project-Slider">
                        {slides.map((img, i) => (
                        <div
                            className="Project-Slide"
                            key={i}
                            style={{
                                transform: `translateX(${100 * (i - curSlide)}%)`,
                                transition: "transform 0.5s"
                            }}
                        >
                            <img src={img} className="Project-Demo" alt="" />
                        </div>
                    ))}
    
                    <button className="Project-Button Project-lbtn" onClick={prevSlide }>&larr;</button>
                    <button className="Project-Button Project-rbtn" onClick={nextSlide}>&rarr;</button>
                    <div className="Project-Dots"></div>
                </div>
            </div>
        </div>
    )
}

export default Project