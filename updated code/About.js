// src/components/About.js
import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>We are an AR-powered home decor visualization app that helps you discover and place furniture and decor items in your space.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '50px 20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default About;