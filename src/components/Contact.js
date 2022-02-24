import React, { useState, useRef } from 'react'
import '../css/contact.scss';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o42r3xx', 'template_5m1xp0i', form.current, 'user_lX4X7vKGyVAh2nfSJpzK6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.preventDefault();
    setMessage(true);
    form.reset('');
  };
  setTimeout(() => {
    setMessage(false);
  }, 4000);
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/email.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="email" name="from_name" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit" value="Send">Send</button>
          {message && <span> Ég mun hafa samband um leið og tækifæri gefst</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact;
