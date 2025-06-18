import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import KkCh from './components/KkCh';

function App() {
  return (
    <Router>
      <KkCh />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
