import React from 'react';
import "./Contact.css"

function Contact() {
  return (
    <>
      <section className="about-img">
        <div className="container">
          {/* <section className="about-img"> */}
          <h4>Contact Us</h4>
        </div>
      </section>

      <div className="container1">
        {/* <h3>Contact Us</h3> */}

        <div className="contact-info">
          <p>📞 Phone: 0123456789</p>
          <p>📧 Email: support@ehgezly.com</p>
          <p>📍 Address: Cairo, Egypt</p>
          <p>⏰ Working Hours: 9 AM - 6 PM</p>
        </div>

        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Write your message here..." required></textarea>
          <button type="submit">Send</button>
        </form>

        <div className="social-links">
          <a href="#">📘 Facebook</a>
          <a href="#">📸 Instagram</a>
          <a href="#">🐦 Twitter</a>
          <a href="#">💬 WhatsApp</a>
        </div>

        <div className="qus">
          <h2>Frequently Asked Questions</h2>
          <p>
            <strong>How can I book a hotel?</strong><br />
            You can book through the homepage by searching and selecting a suitable hotel.
          </p>
          <p>
            <strong>What payment methods are available?</strong><br />
            You can pay via credit cards or upon arrival.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
