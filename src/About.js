import React from 'react';
import './css/About.css'; 
import TeamMember from './Teammember'; 

// Import images
import { default as ashleyImage, default as placeholderAshley } from './assets/about/ashley.jpg';
import { default as jillImage, default as placeholderJill } from './assets/about/jill.png';
import { default as joshuaImage, default as placeholderJoshua } from './assets/about/joshua.JPG';
import { default as patrickImage, default as placeholderPatrick } from './assets/about/patrick.JPG';
import { default as paulineImage, default as placeholderPauline } from './assets/about/pauline2.jpg';
import { default as placeholderPrince, default as princeImage } from './assets/about/prince.png';

function About() {
  return (
    <div className="App">
      {/* About Us Section */}
      <div className="aabout-container">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-heading">About</h1>
          <h3 className="about-subheading">West Neko to Inu</h3>
        </div>
        <div className="about-description">
          <p>
            Welcome to West Neko to Inu, a project-based web application developed to support the stray animals of West Visayas State University.
            This platform is designed to raise awareness about the cats and dogs (neko and inu) on campus, helping the community track, care for, and potentially adopt these animals.
            Our project aims to foster compassion and promote the well-being of our furry friends, ensuring they receive the attention and support they need.
          </p>
        </div>
      </div>
      </div>

      <div className="mission-vision-container">
        <div className="mission-vision">
          <h2>Our Mission</h2>
          <p>
            Our mission is to use technology to connect the West Visayas State University community with stray cats and dogs on campus. 
            West Neko to Inu provides a platform to report sightings, view animal profiles, and facilitate adoptions.
          </p>
        </div>
        <div className="divider"></div>
        <div className="mission-vision">
          <h2>Our Vision</h2>
          <p>
            We envision a campus where every stray cat and dog is valued, cared for, and given a chance to find a loving home. 
            Through West Neko to Inu, we aim to promote a culture of empathy, responsibility, and kindness towards animals.
          </p>
        </div>
      </div>

      <div className="container team-section">
        <h5>Meet the Team</h5>
        <br></br>
        <p>Meet the passionate and dedicated individuals behind West Neko to Inu.</p>
        <div className="team-members">
          <TeamMember
            realImageSrc={joshuaImage}
            placeholderImageSrc={placeholderJoshua}
            altText="Marc Joshua Escueta"
            name="Marc Joshua Escueta"
            role="UI Designer"
            description="marcjoshua.escueta@wvsu.edu.ph"
          />
          <TeamMember
            realImageSrc={paulineImage}
            placeholderImageSrc={placeholderPauline}
            altText="Pauline"
            name="Pauline Joy Bautista"
            role="Frontend Developer"
            description="paulinejoy.bautista@wvsu.edu.ph"
          />
          <TeamMember
            realImageSrc={jillImage}
            placeholderImageSrc={placeholderJill}
            altText="Jill"
            name="Jill Navarra"
            role="Frontend Developer"
            description="jill.navarra@wvsu.edu.ph"
          />
          { <TeamMember
            realImageSrc={ashleyImage}
            placeholderImageSrc={placeholderAshley}
            altText="Ashley"
            name="Ashley Denise Feliciano"
            role="Frontend Developer"
            description="ashleydenise.feliciano@wvsu.edu.ph"
          /> }
          <TeamMember
            realImageSrc={princeImage}
            placeholderImageSrc={placeholderPrince}
            altText="Prince"
            name="Prince Alexander Malatuba"
            role="Frontend Developer"
            description="princealexander.malatuba@wvsu.edu.ph"
          />
          { <TeamMember
            realImageSrc={patrickImage}
            placeholderImageSrc={placeholderPatrick}
            altText="Patrick"
            name="Patrick Joseph Napud"
            role="Frontend Developer"
            description="patrickjoseph.napud@wvsu.edu.ph"
          /> }
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} West Neko to Inu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
