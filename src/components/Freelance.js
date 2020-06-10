import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
//import '../styles/Freelance.css';


const Freelance = (props) => {
  const { urlPhoto, firstname, lastname, bio, siret, email, phone } = props.freelance;

  return (


  <Card className="freealance">
    <Image className="photo" src={urlPhoto} wrapped ui={false} />
    <Card.Content>
  <Card.Header className="card-header">{firstname}{lastname}</Card.Header>
      <Card.Meta>
        <span className='siret'>Siret: {siret}</span>
      </Card.Meta>
      <Card.Description className="card-informations">
        {bio}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p>
        <Icon name='contact' />
        {email}
      </p>
      <p>
        <Icon name='contact' />
        {phone}
      </p>
      <button> + Afficher plus d'information </button>
    </Card.Content>
  
  </Card>



   );

  
}

export default Freelance;
