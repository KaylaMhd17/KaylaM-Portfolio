import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Contact Me</h2>

      <div className="contact_container grid">
        {/* Info Contact */}
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">Don't like forms? Send me an email.</p>
        </div>

        {/* Contact Form */}
       
        <form action="" className="contact_form">
  <div className="contact_form-group">

    <div className="contact_form-div">
      <input
        type="text"
        className="contact_form-input"
        placeholder="Insert your name"
      />
    </div>

    <div className="contact_form-div">
      <input
        type="email"
        className="contact_form-input"
        placeholder="Insert your email"
      />
    </div>

    <div className="contact_form-div subject">
      <input
        type="text"
        className="contact_form-input"
        placeholder="Insert your subject"
      />
    </div>

    <div className="contact_form-div message">
      <textarea
        cols="30"
        rows="10"
        className="contact_form-input"
        placeholder="Write Your Message"
      ></textarea>
    </div>

    <button type="submit" className="btn">
      Send Message
    </button>
  </div>
</form>

      </div>
    </section>
  );
};

export default Contact;
