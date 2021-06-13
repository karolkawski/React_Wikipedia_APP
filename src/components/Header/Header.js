import React from 'react';
import './Header.css';

function Header({text}) {
    return (
        <header className="app__header">
            {text}
        </header>
    );
};

export default Header;