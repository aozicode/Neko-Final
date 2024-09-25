import React, { useEffect, useState } from 'react';
import './css/Pet.css'; // Assuming you have a CSS file for styles
import petImage6 from './assets/animals/dog6.jpg'; // Import your pet image
import backgroundImage from './assets/bgs/profbg.svg'; // Import background image

const Profile6 = () => {
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
            
        }}>
            <div className="animalDetails">
                <img src={petImage6} alt="animal_image" />
                <h2>Cristobal</h2>
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
                    {activeTab === 'About Me' && <p><b>Name:</b> Cristobal</p>}
                    {activeTab === 'About Me' && <p><b>Breed:</b> Aspin</p>}
                    {activeTab === 'About Me' && <p><b>Weight:</b> 34 kg</p>}
                    {activeTab === 'About Me' && <p><b>Age:</b> 6 years</p>}
                    {activeTab === 'About Me' && <p><b>Gender:</b> Male</p>}
                    {activeTab === 'About Me' && <p><b>Personality:</b> Cristobal is a bundle of joy with a heart full of love. He’s playful, loyal, and always ready to make new friends. His golden fur and wagging tail are a constant source of happiness for everyone around him.</p>}
                    {activeTab === 'My Story' && <p>Cristobal is a lovable Aspin with a heart full of adventure and a spirit that never quits. Known for his playful energy, he spends his days chasing after butterflies, exploring every corner of the yard, and making friends with anyone he meets. Cristobal’s playful bark and wagging tail bring smiles to everyone around him. When it’s time to wind down, he curls up next to his family, radiating warmth and affection. With his loyalty and cheerful demeanor, Cristobal proves that every day is a new opportunity for fun and love. </p>}
                </div>
            </div>
        </div>
    );
};

export default Profile6;