import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import About from './components/About';
import Categories from './components/Categories';
import Camera from './components/Camera';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FeaturedCategories />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/camera" element={<Camera />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;