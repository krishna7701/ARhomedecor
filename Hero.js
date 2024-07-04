// components/Hero.js
import React from 'react';

function Hero() {
  return (
    <div style={styles.hero}>
      <h1 style={styles.title}>Visualize Your Dream Home</h1>
      <p style={styles.subtitle}>
        Discover and place home decor items in your space with our AR-powered app.
      </p>
      <button style={styles.button}>Browse Categories</button>
      <div style={styles.imagePlaceholder}>
        <span style={styles.placeholderIcon}>🖼️</span>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: 'center',
    padding: '50px 20px',
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  imagePlaceholder: {
    width: '100%',
    height: '300px',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
  },
  placeholderIcon: {
    fontSize: '48px',
  },
};

export default Hero;