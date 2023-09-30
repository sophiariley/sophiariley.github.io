import './Contact.css'
import emailjs from "@emailjs/browser"
import { useRef } from "react";
import { ContactForm } from '../components/ContactForm';


export default function Contact() {
    return (
        <>
            <div>
                <h1 className="textHeader">Holler at me!</h1>
            </div>

            <div className="contactLine"/>

            <div>
                <p className = "textBody">
                    I'm currently seeking entry level opportunities under the design and development umbrellas. But if you have other questions, please
                    don't hesitate to reach out!
                </p>
            </div>
            <ContactForm/>

            <div/>
        </>
    )
  
}
