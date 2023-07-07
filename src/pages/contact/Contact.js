import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';
import { FaWhatsapp, FaAt, FaMapMarkerAlt } from "react-icons/fa";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_113400t', 'template_ajve19k', form.current, 'yGGquPnT2BkcciTZ2')
      .then((result) => {
        setTimeout(() => {
          document.querySelector(".declartion").style.opacity = '1'
        }, 1000)
        clearTimeout()
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="contact">
      <span className='declartion' >your message is send</span>
      <div className="container">
        <div className="content">
          <div className='text'>
            <span>Get In Touch</span>
            <h1>We are here to Help you </h1>
            <div className='contact-info'>
              <div className='number'>
                <span><FaWhatsapp /></span>
                <div className='phones'>
                  <p>+201220882843</p>
                  <p>+201023203669</p>
                </div>
              </div>
              <div className='email'>
                <span><FaAt /></span>
                <Link to={"mailto:alaaadelnn120@gmail.com"}>alaaadelnn120@gmail.com</Link>
              </div>
              <div className='location'>
                <span>< FaMapMarkerAlt /></span>
                <p>Egypt , Cairo</p>
              </div>
            </div>
          </div>
          <div className='form'>
            <h3>Get In Touch</h3>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}