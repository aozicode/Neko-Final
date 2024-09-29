import React, { useEffect, useState } from 'react';
import './css/Pet.css'; // Assuming you have a CSS file for styles
import petImage4 from './assets/animals/dog2.jpg'; // Import your pet image
import backgroundImage from './assets/bgs/profbg.svg'; // Import background image
import { Link } from 'react-router-dom';
import arrowImage from './assets/buttons_type/back_arrow.png';

const Profile4 = () => {
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
                <img src={petImage4} alt="animal_image" />
                <h2>Bella</h2>
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
                    {activeTab === 'About Me' && <p><b>Name:</b>Bella</p>}
                    {activeTab === 'About Me' && <p><b>Breed:</b> Aspin</p>}
                    {activeTab === 'About Me' && <p><b>Weight:</b> 45 kg</p>}
                    {activeTab === 'About Me' && <p><b>Age:</b> 7 years</p>}
                    {activeTab === 'About Me' && <p><b>Gender:</b> Female</p>}
                    {activeTab === 'About Me' && <p><b>Personality:</b> Affectionate and joyful</p>}
                    {activeTab === 'My Story' && <p> Bella is an exuberant and gentle Aspin who brings joy to everyone she meets. With her warm, inviting eyes and a wagging tail that never seems to stop, she’s the ultimate companion for adventure and relaxation alike. Bella loves to chase after balls in the park, splash around in the water, and make friends with everyone—both human and furry. When the day winds down, she’s happiest snuggling up on the couch with her family, offering gentle nudges and affectionate licks. Her playful spirit and unconditional love make every moment spent with Bella a treasured memory. </p>}
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

export default Profile4;