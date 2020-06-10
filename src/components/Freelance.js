import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
//import '../styles/Freelance.css';


const Freelance = (props) => {
  const { urlPhoto, firstname, lastname, bio, siret, email, phone } = props.freelance;

  return (

  <Card>
    <Image src={urlPhoto} wrapped ui={false} />
    <Card.Content>
  <Card.Header>{firstname}{lastname}</Card.Header>
      <Card.Meta>
        <span className='siret'>Siret: {siret}</span>
      </Card.Meta>
      <Card.Description>
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
    </Card.Content>
  </Card>

   );

  
}

export default Freelance;
