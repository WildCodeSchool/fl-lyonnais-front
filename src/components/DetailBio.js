import React from 'react';
import '../JohnDoe';
import {John_Doe} from '../images/John_Doe.jpg'


function detailBio(props) {
  return (
    <div>
      <h1>{props.freelance.firstname} {props.freelance.lastname}</h1>
      <img src={props.freelance.url_photo} alt={`${props.freelance.lastname}`} className='detailPhoto'/>
      <p>{props.freelance.bio}</p>
    </div>
  )
}

export default detailBio;