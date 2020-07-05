import React from 'react';
import '../../pages/Detail.scss';

function DetailContact (props) {
  return (
    <div>
      <h2 className='detailh2'>Mes coordonnées</h2>
      <div className='detailcontact'>

        <div className='detailcompany'>
          <p>{props.freelances.street}</p>
          <p>{props.freelances.zip_code} - {props.freelances.city} - {props.freelances.country}</p>
        </div>
        <div className='Detailcontactemail'>
          <a href={'mailto:' + props.freelances.email}><p>Email</p></a>
          <a href={props.freelances.url_web_site}><p>Site web</p></a>
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
