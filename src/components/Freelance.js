import React from 'react';
import '../styles/Freelance.css';

const Freelance = (props) => {
  const { urlPhoto, firstname, lastname, bio, siret, email, phone } = props.freelance;

  return (
    <div className='freelance'>
      <figure className='ListingCard'>

        <div className='photo'>
          <img src={urlPhoto} alt={firstname} />
          {firstname} {lastname}
        </div>

        <figcaption>

          <div className='dropdown'>
            <span>Plus d'information</span>
            <div className='dropdown-content'>

              <strong> Biographie</strong> : {bio}

              <blockquote>
                <hr />
                <strong> Siret </strong> : {siret}
              </blockquote>

              <hr />

            </div>
          </div>

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
};

export default Freelance;
