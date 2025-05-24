import React from 'react';
import './intro.css';
// import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';

import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro"> 
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Reuben</span> <br/> <span className="introHead">Website Developer </span> </span>
                <p className="introPara">I am a skilled Web Dev with experience in building  visually <br /> appealing and user friendly website. </p>
                
                <Link>
                <button className="btn"><img src={btnImg} alt="Hire" className='btnImg' />Hire Me</button>
                </Link>
                

            </div>
            
            {/*  <img src={bg} alt="profile" className="bg" /> This is the main code */}
            {/* <img src={bg} alt="Animated" className="bg" /> */}
            
        </section>
    )
}

export default Intro;