
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './css/index.css';
import App from './App';
import Header from './header';
import About from './About';
import AnimalsProfiles from './AnimalsProfiles';
import Profile1 from './PetProfile1';
import reportWebVitals from './reportWebVitals';
import Profile2 from './PetProfile2';
import Profile3 from './PetProfile3';
import Profile4 from './PetProfile4';
import Profile5 from './PetProfile5';
import Profile6 from './PetProfile6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/animals" element={<AnimalsProfiles />} />
        <Route path="/profile1" element={<Profile1 />} /> 
        <Route path="/profile2" element={<Profile2 />} /> 
        <Route path="/profile3" element={<Profile3 />} /> 
        <Route path="/profile4" element={<Profile4 />} /> 
        <Route path="/profile5" element={<Profile5 />} /> 
        <Route path="/profile6" element={<Profile6 />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();