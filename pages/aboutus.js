import React from 'react';
import Style from "../styles/aboutus.module.css";
function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="hero-section">
        <h1>About Us</h1>
        <p>Welcome to Musify, the premier NFT marketplace for music lovers! Our platform is built on cutting-edge technology to provide you with a seamless and secure experience when buying, selling, and trading NFTs. Here at Musify, we're passionate about music and the blockchain, and we're excited to bring these two worlds together.</p>
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        
      </div>
      <div className="values-section">
        <h2>Our Values</h2>
        <div className="value">
          <h3>Innovation</h3>
          <p>We believe that innovation is the key to success in the blockchain industry. That's why we're always exploring new ways to improve our platform and enhance the user experience.</p>
        </div>
        <div className="value">
          <h3>Creativity</h3>
          <p>We're passionate about music and art, and we believe that creativity is essential to creating a platform that truly resonates with our users. That's why we've invested heavily in our design and branding.</p>
        </div>
        <div className="value">
          <h3>Community</h3>
          <p>At Musify, we believe that community is everything. We're committed to building a strong and supportive community of artists, music lovers, and blockchain enthusiasts who share our passion for innovation and creativity.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;