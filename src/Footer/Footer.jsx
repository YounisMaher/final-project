import React from 'react'

function Footer() {
  return (
    <>
        <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section about">
              <h2>Ehgezly</h2>
              <p>
                Your favorite platform for easy and fast appointment booking. We provide you with the best online booking experience.
              </p>
            </div>

            <div className="footer-section links">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="About.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contactus.html">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section contact">
              <h2>Contact Us</h2>
              <p><i className="fas fa-phone"></i> +966 555 555 555</p>
              <p><i className="fas fa-envelope"></i> contact@ehgezly.com</p>
            </div>

            <div className="footer-section social">
              <h2>Follow Us</h2>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>All rights reserved &copy; 2025 | Ehgezly</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
