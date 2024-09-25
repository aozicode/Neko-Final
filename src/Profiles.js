import React from 'react';
import './css/ProfileItems.css'; 
import { Link } from 'react-router-dom';

import finalpic1 from './assets/animals/finalpic1.png'; 
import finalpic2 from './assets/animals/finalpic2.png'; 
import finalpic3 from './assets/animals/finalpic3.png'; 
import finalpic4 from './assets/animals/finalpic4.png'; 
import finalpic5 from './assets/animals/finalpic5.png'; 
import finalpic6 from './assets/animals/finalpic6.png'; 

const images = [
  {
    src: finalpic1, // Use the imported variable
    alt: 'Cat Image',
    text: 'Looney',
    link: '/profile1'
  },
  {
    src: finalpic2,
    alt: 'Image 2',
    text: 'Ming',
    link: '/profile2'
  },
  {
    src: finalpic3,
    alt: 'Image 3',
    text: 'Kittles',
    link: '/profile3'
  },
  {
    src: finalpic4, // Use the imported variable
    alt: 'Cat Image',
    text: 'Bella',
    link: '/profile4'
  },
  {
    src: finalpic5,
    alt: 'Image 2',
    text: 'Jinggoy',
    link: '/profile5'
  },
  {
    src: finalpic6,
    alt: 'Image 3',
    text: 'Cristobal',
    link: '/profile6'
  },
];

const Profiles = () => {
  return (
    <div className='Page'>
    <div>
      <div className='Title'>
        <h1>Animals</h1>
      </div>
      <div className="grid">
        {images.map((image, index) => (
          <div className="grid-item" key={index}>
            <Link to={image.link}>
            <img src={image.src} alt={image.alt} />
            </Link>
            <p>{image.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Profiles;
