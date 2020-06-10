import React from 'react';

function DetailContact(props) {
  return (
    <div>
      <h2>Mes coordonnées</h2>
      <ul>
        <li>Coordonnées professionnelles de {props.freelance.firstname} {props.freelance.lastname} :</li>
        <li>{props.freelance.company}</li>
        <li>{props.freelance.street}</li>
        <li>{props.freelance.zip_code} - {props.freelance.city} - {props.freelance.country}</li>
        <li>email : {props.freelance.email}</li>
        <li>Site web : {props.freelance.url_web_site}</li>
        <li>SIRET : {props.freelance.siret}</li>
        <li>Numéro de TVA : {props.freelance.vat_number}</li>
      </ul>
    </div>
  );
};

export default DetailContact;