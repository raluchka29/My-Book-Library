import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../Images/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
/*npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons */


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleNavbar = () => setToggleMenu(!toggleMenu);

    return (
        <nav className="navbar" id="navbar">
            <div className="container navbar-content flex">
                <div className="brand-and-toggler flex flex-sb">
                    <Link to="/" className="navbar-brand flex">
                        <img src={logoImg} alt="site logo" style={{ maxWidth: '150px' }} />                        
                        <span className=" fw7 fs-24 ls-1">My Book Library</span>
                    </Link>
                    <button
                    type="button"
                    className="navbar-toggler-btn"
                    onClick={handleNavbar}
                    aria-expanded={toggleMenu}
                    aria-controls="navbarNav">
                     <FontAwesomeIcon className={`icon ${toggleMenu ? 'white' : 'black'}`} icon={faAlignRight}style={{ fontSize: '16px', marginRight: '25rem' }}   />                      
                    </button>

                </div>

                <div id="navbarNav" className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/book" className="nav-link text-uppercase text-white fs-22 fw-6 ls-1">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-uppercase text-white fs-22 fw-6 ls-1">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;