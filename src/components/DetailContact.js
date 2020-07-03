import React from 'react';
import '../styles/Detail.scss';

function DetailContact (props) {
  return (
    <div>
      <h3 className='detailh2'>Mes coordonnées</h3>
      <div className='detailcontact'>

        <div className='detailcompany'>
          <p>{props.freelances.street}</p>
          <p>{props.freelances.zip_code} - {props.freelances.city} - {props.freelances.country}</p>
        </div>
        <div className='Detailcontactemail'>
          <p>email : {props.freelances.email}</p>
          <p>Site web : {props.freelances.url_web_site}</p>
        </div>
        <div className='Detailcontactsiret'>
          <p>SIRET : {props.freelances.siret}</p>
          <p>Numéro de TVA : {props.freelances.vat_number}</p>
        </div>

      </div>
    </div>
  );
}

export default DetailContact;
