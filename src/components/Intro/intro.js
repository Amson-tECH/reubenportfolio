import React from 'react';
import './intro.css';

import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';

//import { Link } from 'react-scroll';



const Intro = () => {
    return (
        <>
            {/* Embedded CSS */}
            
            

            <section id="intro">
                <div className="introContentContainer"> {/* New wrapper for flex layout */}
                    <div className="introTextContent"> {/* Wrapper for all text and button */}
                        <span className="hello">Hello,</span>
                        <span className="introText">I'm <span className="introName">Reuben</span> <br/> <span className="introHead">  A Software Developer </span> </span>
                        <p className="introPara">I create modern, user-focused apps and websites  <br /> that are fast, responsive, and beautifully designed. </p>

                        <a href="https://drive.google.com/file/d/1t8PRdyFjlNcYzlhA-Igtp9WdtwZ3x5vX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="btn">
                                <img src={btnImg} alt="Hire" className='btnImg' />Hire Me
                            </button>
                        </a>
                    </div>

                    {/* The profile image */}
                   <div className="profile-image-container">
                    <img src={bg} alt="Reuben's Profile" className="round-image" />
                </div>
                </div>
            </section>
        </>
    );
}

export default Intro;
