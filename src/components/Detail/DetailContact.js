import React from 'react';
import '../../pages/Detail.scss';

function DetailContact (props) {
  return (
    <div>
      <h2 className='detailh2'>Coordonnées</h2>
      <div className='detailcontact'>
        <div className='detailcompany'>
          <p>{props.freelances.company}</p>
          <p>{props.freelances.street}</p>
          <p>{props.freelances.zip_code} {props.freelances.city} {props.freelances.country}</p>
        </div>
        <div className='Detailcontactemail'>
          {props.freelances.phone_number && <a href={'tel:' + props.freelances.phone_number}><p>Tél : {props.freelances.phone_number}</p></a>}
          {props.freelances.email && <a href={'mailto:' + props.freelances.email}><p>Email</p></a>}
          {props.freelances.url_web_site && <a href={props.freelances.url_web_site}><p>Site web</p></a>}
        </div>
        <div className='Detailcontactsiret'>
          {props.freelances.siret && <p>SIRET : {props.freelances.siret}</p>}
          {props.freelances.vat_number && <p>Numéro de TVA : {props.freelances.vat_number}</p>}
        </div>
      </div>
    </div>
  );
}

export default DetailContact;
