import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from '../src/components/organisms/Navigation';
import Home from '../src/components/pages/Home'; 
import Hero from '../src/components/organisms/Hero'; 
import Calculator from '../src/components/molecules/calculator';
import AboutMe from '../src/components/pages/AboutMe';

const App = () => {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hero" element={<Hero />} />
    <Route path="/calculator" element={<Calculator />} />
    <Route path="/about" element={<AboutMe />} />
  </Routes>
</Router>
  );
};

export default App;