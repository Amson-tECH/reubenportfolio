import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';



const Works = () => {
    return (
        <section id='works'>
           <h2 className="worksTitle">My Portfolio</h2>
           <span className="worksDesc">I take pride in building websites and I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.  </span>
           <div className="workImgs">
            <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
            <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
            <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
            <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
            <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
            <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
           </div>
           {/*<button className="workBtn">See more </button> */}
        </section>
    );
}

export default Works;