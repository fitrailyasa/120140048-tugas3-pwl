import React from 'react';

function Header(props) {
    const { darkMode } = props;
    return (
        <header>
            <nav className={`px-3 navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-primary bg-primary'}`}>
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
                </ul>
            </nav>
        </header>
    );
}

export default Header;
