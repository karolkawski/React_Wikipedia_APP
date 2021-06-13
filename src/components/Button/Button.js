import React from 'react';
import './Button.css';

function Button({text, modificator, handleClick}) {
    return (
        <button className={modificator ? `wikipedia-viewer__button wikipedia-viewer__button--${modificator}` : 'wikipedia-viewer__button'} onClick={handleClick}>{text}</button>
    );
};

export default Button;