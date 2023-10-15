// Tugas Individu 3 - Pemrograman Web Lanjut
// 120140048 - Fitra Ilyasa
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Kontak from './pages/Kontak';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Efek samping untuk memperbarui tema saat darkMode berubah
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={` ${darkMode ? 'dark-mode' : ''}`}>
      <Router>

        <Header>
          <li className="nav-item">
            <button onClick={() => setDarkMode(!darkMode)} className={`nav-link btn bg-${darkMode ? 'white' : 'dark'} text-${darkMode ? 'black' : 'white'}`} >{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
          </li>
        </Header>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
