import React from "react";
import "./About.css";
import aboutImg from "../../Images/about-img.jpg";

const About = () => {
    return (
    <section className="about">
        <div className="container">
            <div className="section-title">
                <h2>About</h2>
            </div>

            <div className="about-content grid">
                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="about-text">
                    <h2 className="about-title fs-26 ls-1">About Book Library</h2>
                    <br></br>
                    <p fs-20>Welcome to our Book Library! This app is designed to help you organize and manage your collection of books. Whether you're an avid reader, a book collector, or just someone who loves literature, our Book Library app is here to enhance your reading experience.</p>                    
                    <p fs-17>Effortlessly add and manage your book collection</p>
                    <p>Search for books by title, author, or genre</p>
                    <p>Keep track of books you've read and want to read</p>
                    <p>Customize book details such as ratings and notes</p>
                    <p>Responsive and user-friendly interface</p>
                    <br></br>
                    <p>Thank you for choosing our Book Library app. We hope it brings joy and organization to your reading journey. Happy reading!</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About