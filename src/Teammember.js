import React from 'react';
import './css/Teammember.css'; // Ensure this CSS file contains the styles for interactive images

const TeamMember = ({ realImageSrc, placeholderImageSrc, altText, name, role, description }) => {
  return (
    <div className="team-member">
      <div className="team-member-img-container">
        <img
          src={placeholderImageSrc}
          alt={altText}
          className="team-member-img placeholder-img"
        />
        <img
          src={realImageSrc}
          alt={altText}
          className="team-member-img real-img"
        />
      </div>
      <h3>{name}</h3>
      <h4>{role}</h4>
      <p>{description}</p>
    </div>
  );
};

export default TeamMember;
