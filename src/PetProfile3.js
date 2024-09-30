import React, { useEffect, useState } from 'react';
import './css/Pet.css'; // Assuming you have a CSS file for styles
import { Link } from 'react-router-dom';
import petImage3 from './assets/animals/tgcat4.jpg'; // Import your pet image
import backgroundImage from './assets/bgs/profbg.svg'; // Import background image
import arrowImage from './assets/buttons_type/arrow.png';

const Profile3 = () => {
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
                <img src={petImage3} alt="animal_image" />
                <h2>Kittles</h2>
                <h3>Puspin</h3>
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
                    {activeTab === 'About Me' && <p><b>Name:</b>Kittles</p>}
                    {activeTab === 'About Me' && <p><b>Breed:</b> Puspin</p>}
                    {activeTab === 'About Me' && <p><b>Weight:</b> 11 kg</p>}
                    {activeTab === 'About Me' && <p><b>Age:</b> 3 years</p>}
                    {activeTab === 'About Me' && <p><b>Gender:</b> Female</p>}
                    {activeTab === 'About Me' && <p><b>Personality:</b> Intelligent, talkative, and affectionates</p>}
                    {activeTab === 'My Story' && <p>Kittles is a spirited Puspin whose vibrant coat matches her lively personality. Always on the lookout for adventure, she loves exploring her neighborhood, chasing butterflies, and playfully darting after her shadow. After a day of excitement, she turns into a cuddly companion, snuggling up with her humans and offering comforting nuzzles. A social butterfly at heart, Kittles welcomes new friends—both human and furry—with open paws, making every moment an adventure filled with joy and love. </p>}
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

export default Profile3;