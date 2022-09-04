import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>Home</li>
            </NavLink>
            <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>About Ruffey</li>
            </NavLink>
            <NavLink to="/pays" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>PAYS</li>
            </NavLink>
            <NavLink to="/puzzle" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>JEUX PUZZLE</li>
            </NavLink>
            <NavLink to="/news" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>CV - NEWS</li>
            </NavLink>
            <NavLink to="/classification" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>CLASSIFICATION</li>
            </NavLink>
            <NavLink to="/codification" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>CODE BARRE</li>
            </NavLink>
            </ul>         
        </nav>
    );
};

export default Navigation;