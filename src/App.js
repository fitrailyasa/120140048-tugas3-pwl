// Tugas Individu 3 - Pemrograman Web Lanjut
// 120140048 - Fitra Ilyasa
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ganti 'Switch' dengan 'Routes'
import Home from './pages/Home';
import About from './pages/About';
import Kontak from './pages/Kontak';

class App extends React.Component {
  // ...
  render() {
    return (
      <div className="container">
        <Router>
          <header className="mt-3">
            <nav className="px-3 navbar navbar-expand-lg navbar-primary bg-primary">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">Beranda</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/tentang">Tentang</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/kontak">Kontak</a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="p-3 bg-light">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tentang" element={<About />} />
              <Route path="/kontak" element={<Kontak />} />
            </Routes>
          </div>
        </Router>
        <footer className="bg-primary">
          <p className="p-2 text-center text-white">Hak Cipta &copy; 2023 || 120140048 - Fitra Ilyasa</p>
        </footer>
      </div>
    );
  }
}

export default App;
