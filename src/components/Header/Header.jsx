import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?cs=srgb&dl=pexels-41162.jpg&fm=jpg/" />
        </header>
    );
}

export default Header;