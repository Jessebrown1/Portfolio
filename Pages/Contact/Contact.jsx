import React, { useState } from 'react'
import { RiMap2Line,RiUser3Line, RiMailLine, RiContactsBook2Line, RiSendPlaneLine  } from "react-icons/ri";
import './Contact.css'
import emailjs from '@emailjs/browser';





const Contact = () => {

  const[formData, setFormdata] = useState({
    name:'',
    email: '',
    subject: '',
    message: '',
  })

  const[feedbackMessage, setFeedbackMessage] = useState('')
  const[messageColor, setMessageColor] = useState('')

  const handleChange = (e) =>{
    setFormdata({...formData, [e.target.name]: e.target.value})
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.subject || !formData.message  ){
      setMessageColor('color-red');
      setFeedbackMessage('Write all the input fields');

      setTimeout(()=> setFeedbackMessage(''), 3000)

      return;
    }

    emailjs
      .send('service_vesl3x8', 'template_k717uze', formData, 'QdoxY_NGXw_T8oFc0')
      .then(
        () => {
          setMessageColor('color-first');
      setFeedbackMessage('Message sent ✔');
      setTimeout(()=> setFeedbackMessage(''), 5000) 

      setFormdata({name: '', email: '', subject: '', message: ''})
        },
        (error) => {
          alert('OOPs! SOMETHING WENT WRONG...', error)
        },
      );
  }

  return (
    <section className="contact section">
      <h2 className="section-title">Contact <span>Me</span></h2>

      <div className="contact-container container grid">
      <div className="contact-content grid"> 
        <div className="contact-card">
          <span className="contact-icon">
            <RiMap2Line />
          </span>

          <div>
            <h3 className="contact-title">Address</h3>
            <p className="contact-data">Tema Golfcity, Accra, Ghana</p>
          </div>
        </div>

        <div className="contact-card">
          <span className="contact-icon">
            <RiUser3Line />
          </span>

          <div>
            <h3 className="contact-title">Freelance </h3>
            <p className="contact-data">Available Right Now</p>
          </div>
        </div>

        <div className="contact-card">
          <span className="contact-icon">
            <RiMailLine />
          </span>

          <div>
            <h3 className="contact-title">Email</h3>
            <p className="contact-data">Jnbentum@gmail.com</p>
          </div>
        </div>

        <div className="contact-card">
          <span className="contact-icon">
            <RiContactsBook2Line  />
          </span>

          <div>
            <h3 className="contact-title">Phone</h3>
            <p className="contact-data">+233552384351</p>
          </div>
        </div>  
      </div>

      <form action="" className="contact-form grid" onSubmit={sendEmail}>
        <div className="contact-form-group grid">
          <div className="contact-from-div">
            <label htmlFor="" className="contact-form-label">
            Your full Name <b>*</b>
            </label>
            <input type="text" name='name' onChange={handleChange} value={formData.name} className="contact-form-input" />
          </div>

          <div className="contact-form-div">
            <label htmlFor="" className="contact-form-label">
            Your Email Address <b>*</b>
            </label>
            <input type="email" name='email' onChange={handleChange} value={formData.email} className="contact-form-input" />
          </div>
        </div>

        <div className="contact-form-div">
            <label htmlFor="" className="contact-form-label">
            Your Subject <b>*</b>
            </label>
            <input type="text" name='subject' onChange={handleChange} value={formData.subject } className="contact-form-input" />
          </div>

          <div className="contact-from-div">
            <label htmlFor="" className="contact-form-label">
            Your Message <b>*</b>
            </label>
            <textarea name='message' onChange={handleChange} value={formData.message} className='contact-form-input contact-form-area'></textarea>
          </div>

          <div className="contact-button">
            <button className="button">Send Message
            
            <span className="button-icon">
              <RiSendPlaneLine/>
            </span>
            </button>
          </div>

          {feedbackMessage &&(
            <p className={`contact-message  ${messageColor}`}>
              {feedbackMessage}
            </p>
          )}
      </form>
      </div>
    </section>

    
    
  )
} 

export default Contact
