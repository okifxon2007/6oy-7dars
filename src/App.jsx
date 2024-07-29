import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Dtails from './components/dtails';
import About from './components/about';
import './App.css';

function App() {
  return (
    <div className="conta">
      <div className="box">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/:id' element={<Dtails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
