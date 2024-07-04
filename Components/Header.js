// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header style={styles.header}>
        <div style={styles.logo}>
          <Link to="/">
            <span style={styles.cube}>□</span>
          </Link>
        </div>
        <nav style={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
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