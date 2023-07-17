import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Contact/Contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0s36n7b', 'template_st6spw7', form.current, 'uEJ1WF2MEN3UZcqDh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })

    alert("I will be in touch with you SOON 💯  ")

    form.current.reset();
  }



  return (
    <>
      <div id="sec1">
        <div className='form'>
          <div className='head'>
            <h1>CONTACT US</h1>
          </div>
          <div className='cont2'>

            <form ref={form} onSubmit={sendEmail}>


              <input type="text" name="user_name" placeholder='Name' />

              <input type="email" name="user_email" placeholder='Email' />
              <label>Message</label>
              <textarea style={{ marginTop: '20px' }} name="message" placeholder='Message' />
              <button type="submit" value="Send" className='button-85 i-button'>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )

}

export default Contact
