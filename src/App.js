// App.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="app">
            <Navbar onSectionChange={handleSectionChange} activeSection={activeSection} />
            {activeSection === 'home' && (
                <section id="home" className="section visible">
                    <h1>Home</h1>
                    <p>Welcome to  Homepage!</p>
                    <div className="image-gallery">
                        <img src="https://smallbiztrends.com/wp-content/uploads/2016/05/shutterstock_663887863.jpg" alt="Image 1" className="gallery-image" />
                        <img src="https://www.oso-web.com/wp-content/uploads/2018/03/homepage-design-connecticut-1.jpeg" alt="Image 2" className="gallery-image" />
                        <img src="https://smallbiztrends.com/wp-content/uploads/2016/05/shutterstock_663887863.jpg" alt="Image 1" className="gallery-image" />
                    </div>
                </section>
            )}
            {activeSection === 'about' && (
                <section id="about" className="section visible">
                    <div className="about-content">
                    <h1>About</h1>
                    <p>Learn more about us.</p>
                    </div>
                </section>
            )}
            {activeSection === 'services' && (
                <section id="services" className="section visible">
                  <div className="about-content">
                    <h1>Services</h1>
                    <p>Discover our services.</p>
                    </div>
                </section>
                
            )}
            {activeSection === 'contact' && (
                <section id="contact" className="section visible">
                    <div className="about-content"> 
                    <h1>Contact</h1>
                    <p>Get in touch with us.</p>
                    </div>
                </section>
            )}
        </div>
    );
};

export default App;
