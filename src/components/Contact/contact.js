import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
// This is the new code
     const formData = new FormData(form.current); 
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

     if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return; // stop the function if validation fails
    }

    emailjs
      .sendForm('service_zg9lx9r', 'template_is55oup', form.current, {
        publicKey: 'cvun1eUVaImpQyDSG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          
        },
      );
  };
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle"> Bio </h1>
                <p className="clientDesc">I am an enthusiastic and dedicated Information Technology student with a keen interest in IT support, telecommunications, and 
website development. Proficient in Microsoft Office Suite with experience in data entry, budgeting, and financial reporting. Familiar 
with web development tools and principles, coupled with strong problem-solving, communication, presentation and leadership skills. 
I am eager to apply technical knowledge and administrative experience to contribute effectively in a dynamic IT environment. </p>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle"> Contact Me </h1>
                <span className="contactDesc">Please fill the form below to discuss any work opportunities. </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='name' required/>
                    <input type="email" className="email" placeholder="Your Email" name='email' required/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/reuben-korsi-amuzu-506265358" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIcon} alt="Facebook" className="link" /> 
                        </a>
                        <a href="https://x.com/newguy_amson?s=21" target="_blank" rel="noopener noreferrer">
                        <img src={TwitterIcon} alt="Twitter" className="link" />
                        </a>
                        <a href="https://wa.me/233549221575?text=Hello%20Mr.%20Reuben%2C%20I%27m%20interested%20in%20your%20work" target="_blank" rel="noopener noreferrer">
                        <img src={YouTubeIcon} alt="YouTube" className="link" />
                        </a>
                        <a href="https://www.instagram.com/mrr._amson?igsh=MW1zOWw1Mm5qbTJpdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt="Instagram" className="link" />
                        </a>
                    </div>
                </form>

            </div>
         </section>
    )
}

export default Contact; 