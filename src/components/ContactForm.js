import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import {FaLinkedin} from "react-icons/fa";
import { SiHandshake } from "react-icons/si";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hl2w735', 'template_dna20c8', form.current, 'Rp88Ter9Ex3ZCHPdQ')
      .then((result) => {
          alert("Message sent successfully! I'll be in touch soon.")
          window.location.reload(false)
      }, (error) => {
        alert("There was an error sending your message. Please try again.")
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contactForm'>
        <ul>
            <li className = "half">
                <input 
                    type = "text" 
                    name = "name" 
                    placeholder='Name' 
                    required
                />
            </li>

            <li className = "half">
                <input 
                    type = "email" 
                    name = "email" 
                    placeholder='E-mail' 
                    required
                />
            </li>

            <li>
                <input 
                    type = "text" 
                    name = "subject" 
                    placeholder='Subject' 
                    required
                />
            </li>

            <li>
                <textarea 
                    placeholder="How can I help?" 
                    name = "message" 
                    required
                />
            </li>

            <li>
                <input type="submit" className = "submitButton" value="Submit"/>
            </li>

            <div className="iconsContainer">
                <li>
                    <a href="https://www.linkedin.com/in/sophia-riley/">
                        <FaLinkedin className="linkedIn" size= "50"/>
                    </a>
                </li>
                        
                <li>
                    <a href="https://app.joinhandshake.com/stu/users/26824802">
                        <SiHandshake className="handshake" size= "45"/>
                    </a>
                </li>
            </div>
        </ul>
    </form>
  );
};