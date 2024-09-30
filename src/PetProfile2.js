import React, { useEffect, useState } from 'react';
import './css/Pet.css'; 
import petImage2 from './assets/animals/tgcat1.jpg'; 
import { Link } from 'react-router-dom';
import backgroundImage from './assets/bgs/profbg.svg';
import arrowImage from './assets/buttons_type/back_arrow.png';

const Profile2 = () => {
    const [activeTab, setActiveTab] = useState('About Me');

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css?family=Montserrat';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        const tabs = document.querySelectorAll('.tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
            
                tabs.forEach(t => t.classList.remove('active'));
               
                tab.classList.add('active');
            });
        });

   
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
                <img src={petImage2} alt="animal_image" />
                <h2>Mingming</h2>
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
                    {activeTab === 'About Me' && <p><b>Name:</b> Mingming</p>}
                    {activeTab === 'About Me' && <p><b>Breed:</b> Puspin</p>}
                    {activeTab === 'About Me' && <p><b>Weight:</b> 15 kg</p>}
                    {activeTab === 'About Me' && <p><b>Age:</b> 3 years</p>}
                    {activeTab === 'About Me' && <p><b>Gender:</b> Female</p>}
                    {activeTab === 'About Me' && <p><b>Personality:</b>Playful, curious, and affectionate</p>}
                    {activeTab === 'My Story' && <p>Mingming is a spirited and playful Puspin who lights up every room with her cheerful personality. She has a beautiful mix of colors in her coat, which reflects her vibrant spirit. Mingming loves to explore her surroundings, chasing after butterflies or lounging in the sun. Her affectionate nature makes her a beloved member of the family, and she enjoys cuddling up with her humans after a day of play. With her curious and friendly demeanor, Mingming is always ready to make new friends and spread happiness wherever she goes. </p>}
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

export default Profile2;