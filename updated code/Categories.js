// src/components/Categories.js
import React from 'react';

function Categories() {
  const categories = [
    { name: 'Furniture', icon: '🛋️' },
    { name: 'Lighting', icon: '💡' },
    { name: 'Decor', icon: '🎭' },
    { name: 'Textiles', icon: '🧵' },
  ];

  return (
    <div style={styles.container}>
      <h1>Categories</h1>
      <div style={styles.categoriesGrid}>
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
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    marginTop: '30px',
  },
  category: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  icon: {
    fontSize: '48px',
    marginBottom: '10px',
  },
};

export default Categories;