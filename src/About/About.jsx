import React from 'react';
import hotelImage from '../assets/18.jpg'
import"./about.css"
function About() {
  return (
    <>
      <section className="about-img">
        <div className="container">
          <section className="about-img" style={{backgroundImage: `url(${hotelImage})`
}}> 
          <span>about us</span>
          </section>
        </div>
      </section>
      

      <section className="about-content">
        <h3>Who We Are</h3>
        <p>
          Ehgzly is Egypt's go-to hotel booking platform, designed for young travelers and professionals seeking a hassle-free booking experience.
          <br />
          We bring you the best hotel deals with a modern and intuitive interface.
        </p>
        <p>
          Whether you're planning a business trip, a weekend getaway, or a long vacation, Ehgzly makes finding and booking hotels effortless.
          <br />
          With real-time availability, trusted reviews, and seamless payment options, we ensure your trip starts the right way.
        </p>

        <h2>Why Choose Ehgzly?</h2>
        <ul className="features">
          <li>🔥 Hot deals with unbeatable prices.</li>
          <li>🚀 Fast and easy hotel search.</li>
          <li>💬 24/7 customer support – we've got your back!</li>
          <li>🔒 Secure and quick booking process.</li>
          <li>🌍 Wide selection of hotels across Egypt.</li>
        </ul>

        <a href="home.html" className="btn">Back to Home</a>
      </section>
    </>
  );
}

export default About;
