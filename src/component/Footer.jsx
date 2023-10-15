import React from 'react';

function Footer(props) {
    const { darkMode } = props;
    return (
        <footer className={`bg-${darkMode ? 'dark' : 'primary'}`}>
            <p className={`p-2 text-center text-${darkMode ? 'white' : 'white'}`}>Hak Cipta &copy; 2023 || 120140048 - Fitra Ilyasa</p>
        </footer>
    );
}

export default Footer;
