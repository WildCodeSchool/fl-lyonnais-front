import React from 'react';
import '../styles/Detail.css'

function DetailContact (props) {
  return (
    <div>
      <h2>Mes coordonnées</h2>
      <div className='detailcontact'>
        <ul>
          <li>{props.freelance.company}</li>
          <li>{props.freelance.street}</li>
          <li>{props.freelance.zip_code} - {props.freelance.city} - {props.freelance.country}</li>
          <div className='Detailcontactemail'>
            <li>email : {props.freelance.email}</li>
            <li>Site web : {props.freelance.url_web_site}</li>
          </div>
          <div className='Detailcontactsiret'>
            <li>SIRET : {props.freelance.siret}</li>
            <li>Numéro de TVA : {props.freelance.vat_number}</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default DetailContact;
