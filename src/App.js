// Tugas Individu 3 - Pemrograman Web Lanjut
// 120140048 - Fitra Ilyasa
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Kontak from './pages/Kontak';

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

        <header>
          <nav className={`px-3 navbar navbar-expand-lg navbar-primary ${darkMode ? 'bg-dark' : 'bg-primary'}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link text-${darkMode ? 'white' : 'white'}`} href="/">Beranda</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${darkMode ? 'white' : 'white'}`} href="/tentang">Tentang</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${darkMode ? 'white' : 'white'}`} href="/kontak">Kontak</a>
              </li>
              <li className="nav-item">
                <button onClick={() => setDarkMode(!darkMode)} className={`nav-link btn bg-${darkMode ? 'white' : 'dark'} text-${darkMode ? 'black' : 'white'}`} >{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </div>
        <footer className={`bg-${darkMode ? 'dark' : 'primary'}`}>
          <p className={`p-2 text-center text-${darkMode ? 'white' : 'white'}`}>Hak Cipta &copy; 2023 || 120140048 - Fitra Ilyasa</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
