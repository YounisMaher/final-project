import React from 'react';

function Services() {
  return (
    <>
      <section className="services-img">
        <div className="container">
          {/* <section className="services-img"> */}
          <span>Our Services</span>
        </div>
      </section>

      <section className="services-content">
        <h3>What We Offer</h3>
        <p>
          At Ehgzly, we provide top-notch services to make your hotel booking experience seamless and enjoyable. Explore our exclusive features designed to give you the best deals and convenience.
        </p>

        <div className="services-list">
          <div className="service-card">
            <h2>🔥 Best Hotel Deals</h2>
            <p>Find the most affordable and exclusive hotel deals tailored to your needs.</p>
          </div>
          <div className="service-card">
            <h2>🚀 Fast Booking</h2>
            <p>Book your hotel in just a few clicks with our user-friendly platform.</p>
          </div>
          <div className="service-card">
            <h2>💬 24/7 Support</h2>
            <p>Our customer service team is always available to assist you anytime, anywhere.</p>
          </div>
          <div className="service-card">
            <h2>🔒 Secure Payments</h2>
            <p>Enjoy a safe and secure booking process with multiple payment options.</p>
          </div>
        </div>

        <a href="home.html" className="btn">Back to Home</a>
      </section>
    </>
  );
}

export default Services;
