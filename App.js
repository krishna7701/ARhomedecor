// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedCategories />
    </div>
  );
}

export default App;
