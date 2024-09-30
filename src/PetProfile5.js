import React, { useEffect, useState } from 'react';
import './css/Pet.css'; // Assuming you have a CSS file for styles
import { Link } from 'react-router-dom';
import petImage5 from './assets/animals/dog5.jpg'; // Import your pet image
import backgroundImage from './assets/bgs/profbg.svg'; // Import background image
import arrowImage from './assets/buttons_type/arrow.png';

const Profile5 = () => {
    const [activeTab, setActiveTab] = useState('About Me');

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css?family=Montserrat';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        const tabs = document.querySelectorAll('.tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove 'active' class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Add 'active' class to the clicked tab
                tab.classList.add('active');
            });
        });

        // Cleanup event listeners on unmount
        return () => {
            tabs.forEach(tab => {
                tab.removeEventListener('click', () => {});
            });
        };
    }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="whole" style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            minHeight: '100vh', 
        }}>
            <div className="animalDetails">
                <img src={petImage5} alt="animal_image" />
                <h2>Jinggoy</h2>
                <h3>Aspin</h3>
            </div>

            <div className="tabs">
                <div 
                    className={`tab ${activeTab === 'About Me' ? 'active' : ''}`}
                    onClick={() => handleTabClick('About Me')}
                >
                    <h2>About Me</h2>
                </div>
                <div 
                    className={`tab ${activeTab === 'My Story' ? 'active' : ''}`}
                    onClick={() => handleTabClick('My Story')}
                >
                    <h2>My Story</h2>
                </div>
            </div>

            <div className="aboutPet"> 
                <div className="tab-content">
                    {activeTab === 'About Me' && <p><b>Name:</b> Jinggoy</p>}
                    {activeTab === 'About Me' && <p><b>Breed:</b> Aspin</p>}
                    {activeTab === 'About Me' && <p><b>Weight:</b> 65 kg</p>}
                    {activeTab === 'About Me' && <p><b>Age:</b> 5 years</p>}
                    {activeTab === 'About Me' && <p><b>Gender:</b> Male</p>}
                    {activeTab === 'About Me' && <p><b>Personality:</b> Adventurous, intelligent and loyal,</p>}
                    {activeTab === 'My Story' && <p>Jinggoy is a spirited Aspin with a charming personality that lights up every room. Always ready for adventure, he loves exploring the outdoors, sniffing out new scents, and playing with his favorite toys. His playful antics and infectious energy make him a favorite among kids and adults alike. Jinggoy has a soft side, too, often curling up next to his family for cozy evenings filled with affection and love. With his loyalty and friendly nature, Jinggoy brings joy to everyone he meets, proving that happiness is best shared with a wagging tail. </p>}
                </div>
            </div>

            <Link to="/animals" className="back-to-profile">
                <img src={arrowImage} alt="Arrow" />
            </Link>

        {/* Footer Section */}
        <footer className="indi-footer">
            <p>&copy; {new Date().getFullYear()} West Neko to Inu. All rights reserved.</p>
        </footer>
        </div>
    );
};

export default Profile5;