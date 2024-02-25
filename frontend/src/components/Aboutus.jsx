// import React from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="section-header">
                <div className="container">
                    <h2>Our Story</h2>
                    <p>Welcome to BBC News, where information meets innovation! Our story begins with a dedication to bringing you the most comprehensive news coverage. We are committed to journalistic excellence and ensuring that every story we cover allows you, our
                        readers, to stay informed and engaged with the world around you. Your trust is our motivation, and together, we create a narrative that's not only newsworthy but also truthful and insightful. Welcome to BBC News – Your Trusted Source for Breaking News and In-depth Analysis!</p>
                </div>
            </div>

            <div className="about-section">
                <div className="about-image">
                    <img src="https://img.freepik.com/free-photo/reporter-with-microphone-breaking-news_23-2147677411.jpg?size=626&ext=jpg" alt="reporting" height="350" />
                </div>
                <div className="about-content">
                    <h2>About Us</h2><br />
                    <p>At BBC News, we are a team united by the passion for journalism and the pursuit of truth. Our collective goal is to deliver stories that matter, to a global audience. With a team of reporters, editors, and correspondents from around the world, we work
                        tirelessly to ensure that every angle is covered. Our dedication to factual reporting and thought-provoking analysis is what makes BBC News a leader in the news industry. Join us on our journey to inform and inspire, every day.</p>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
