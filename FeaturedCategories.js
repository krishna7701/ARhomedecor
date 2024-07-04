// components/FeaturedCategories.js
import React from 'react';

function FeaturedCategories() {
  const categories = [
    { name: 'Furniture', icon: '🛋️' },
    { name: 'Lighting', icon: '💡' },
    { name: 'Decor', icon: '🎭' },
    { name: 'Textiles', icon: '🧵' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Discover Your Style</h2>
      <p style={styles.subtitle}>
        Browse our curated selection of home decor categories to find the perfect pieces for your space.
      </p>
      <div style={styles.categories}>
        {categories.map((category, index) => (
          <div key={index} style={styles.category}>
            <span style={styles.icon}>{category.icon}</span>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '50px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '30px',
  },
  categories: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  category: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '36px',
    marginBottom: '10px',
  },
};

export default FeaturedCategories;