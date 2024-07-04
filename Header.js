// components/Header.js
import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <span style={styles.cube}>□</span>
      </div>
      <nav style={styles.nav}>
        <a href="#home">Home</a>
        <a href="#categories">Categories</a>
        <a href="#about">About</a>
        <a href="#camera">Camera</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },
  logo: {
    fontSize: '24px',
  },
  cube: {
    border: '2px solid black',
    padding: '2px 6px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
};

export default Header;