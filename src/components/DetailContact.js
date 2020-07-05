import React from 'react';
import '../styles/Detail.scss';

function DetailContact (props) {
  return (
    <div>
      <h2 className='detailh2'>Mes coordonnées</h2>
      <div className='detailcontact'>

        <div className='detailcompany'>
          <p>{props.freelance.company}</p>
          <p>{props.freelance.street}</p>
          <p>{props.freelance.zip_code} - {props.freelance.city} - {props.freelance.country}</p>
        </div>
        <div className='Detailcontactemail'>
          <p>email : {props.freelance.email}</p>
          <p>Site web : {props.freelance.url_web_site}</p>
        </div>
        <div className='Detailcontactsiret'>
          <p>SIRET : {props.freelance.siret}</p>
          <p>Numéro de TVA : {props.freelance.vat_number}</p>
        </div>

      </div>
    </div>
  );
}

export default DetailContact;
