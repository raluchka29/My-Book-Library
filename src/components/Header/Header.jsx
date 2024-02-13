import React from "react";
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Header = () => {
    return (
        <div className="holder">
            <header className="header">
                <Navbar />
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">find your book of choice.</h2>
                    <br />
                    <p className="header-text fs-18 fw-3">Reading is like breathing in, and writing is like breathing out. A word is a small magic, a spell that can unlock the world. Reading aloud to your children is a gift that will last a lifetime. Never give up on a child who is struggling to read.</p>
                    <SearchForm />
                </div>
            </header>
        </div>
    )
}

export default Header