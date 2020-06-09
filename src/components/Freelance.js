import React from 'react';
import '../styles/Freelance.css';

const Freelance = (props) => {
  const { urlPhoto, firstname, lastname, bio, siret, email, phone } = props.freelance;

  return (
    <div className='freelance'>
      <figure className="ListingCard">
      
        <img className='photo' src={urlPhoto} alt={firstname} />
      
        <figcaption>
          <blockquote>
            <strong> Nom</strong> : {lastname}
          </blockquote>
      
      
          <blockquote>
            <strong> Prénom</strong> : {firstname}
          </blockquote>
      
      
          <blockquote>
            <strong> Biographie</strong> : {bio}
          </blockquote>
      
      
          <blockquote>
            <strong> Siret </strong> : {siret}
          </blockquote>
      
          <hr />
      
      
          <blockquote>
            <h4> Contact</h4> 
          </blockquote>
   
          <blockquote>
            <strong> Numéro de téléphone </strong> : {phone}
          </blockquote>
  
          <blockquote>
            <strong> @ </strong> : {email}
          </blockquote>
      
          <button>
              + Afficher plus d'information
          </button> 
      
      
        </figcaption>
      
      </figure>
    </div>
);
} 

export default Freelance;