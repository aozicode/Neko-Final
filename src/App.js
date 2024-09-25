
import './css/style.css';
import React, { useEffect } from 'react';
import animal1 from './assets/animals/cat1.jpg';
import animal2 from './assets/animals/cat2.jpeg';
import animal3 from './assets/animals/dog3.jpg';
import animal4 from './assets/animals/cat3.jpg';
import animal5 from './assets/animals/dog1.jpg';
import animal6 from './assets/animals/dog4.jpg';
import bg from './assets/bgs/wn_bg.png';
import Arrow from './assets/buttons_type/arrow.svg'; 
import paw_print from './assets/sprites/paw_print.svg';
import catdog from './assets/bgs/cat_dog.gif';

export const images = {
  catdog,
  animal1,
  animal2,
  animal3,
  animal4,
  animal5,
  animal6,
  bg,
  Arrow,
  paw_print,
};

// A section should have class name and identifier

function App() {
  const scrollDown = () => {
    // Check if window.scrollBy works in your environment
    window.scrollBy({
      bottom: window.innerHeight,  // Scroll down by 100vh (the height of the current viewport)
      behavior: 'smooth'        // Smooth scrolling
    });

  }

  const handleClick = () => {
    alert('Put redirect here');
  };

  return (
    <div className="App">
      <div className="background">
        <div id="section-0" className="section section-0"> {/* Example */}
          <div className="section0-container">
            <div className="s1Wrapper-left">
              <div className="s1Txt">
                <h1>West Neku <br />to Inu</h1>
                <h2>Together, we can create a better environment <br />
                for our furry campus companions.</h2>
              </div>
            </div>
            <div className="s1Wrapper-right">
              <img src={images.catdog} alt="Cat 1" />
            </div>
          </div>

        </div>

        <div id="section-1" className="section section-1">
          <div className="section1_container">
            <div className="s2wrapper-right">
              <div className="s2Txt2-container">

                <div className="s2Txt2">
                  <h2>Meet the Animals</h2>
                  <h1>Our Furry Taga-West</h1>
                </div>
              </div>
              <div className="animal-images">
                <img src={images.animal1} alt="Animal 1" />
                <img src={images.animal2} alt="Animal 2" />
                <img src={images.animal3} alt="Animal 3" />
                <img src={images.animal4} alt="Animal 4" />
                <img src={images.animal5} alt="Animal 5" />
                <img src={images.animal6} alt="Animal 6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;