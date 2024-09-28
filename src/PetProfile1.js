import React, { useEffect, useState } from 'react';
import './css/Pet.css'; // Assuming you have a CSS file for styles
import { Link } from 'react-router-dom';
import petImage1 from './assets/animals/tgdog1.jpg'; // Import your pet image
import backgroundImage from './assets/bgs/profbg.svg'; // Import background image
import arrowImage from './assets/buttons_type/arrow.png';

const Profile1 = () => {
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
            minHeight: '110vh', 
            padding: '20px' 
        }}>
            
            <div className="animalDetails">
                <img src={petImage1} alt="animal_image" />
                <h2>Looney</h2>
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
                    {activeTab === 'About Me' && <p><b>Name:</b> Looney</p>}
                    {activeTab === 'About Me' && <p><b>Breed:</b> Puspin</p>}
                    {activeTab === 'About Me' && <p><b>Weight:</b> 30 kg</p>}
                    {activeTab === 'About Me' && <p><b>Age:</b> 3 years</p>}
                    {activeTab === 'About Me' && <p><b>Gender:</b> Male</p>}
                    {activeTab === 'About Me' && <p><b>Personality:</b> Looney is a bundle of joy with a heart full of love. He’s playful, loyal, and always ready to make new friends. His golden fur and wagging tail are a constant source of happiness for everyone around him.</p>}
                    {activeTab === 'My Story' && <p>One sunny afternoon at West Visayas State University, a group of students found Looney wandering near the library, looking lost and a bit scared. They gently coaxed him with some snacks from their lunchboxes and decided to take him in. Looney quickly became the unofficial mascot of the campus, attending classes, lounging in the student lounge, and even joining study groups. His favorite spot was under the big acacia tree, where he would nap while students read their books. Looney’s presence brought smiles and comfort to everyone, making the university feel even more like home. </p>}
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

export default Profile1;