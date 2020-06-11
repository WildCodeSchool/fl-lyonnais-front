import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../styles/Freelance.css';

const Freelance = (props) => {
  const { urlPhoto, firstname, lastname, mainSkills } = props.freelance;

  return (
    <div className='card'>
      <Card className='freelance'>

        <Image className='photo' src={urlPhoto} wrapped ui={false} />
        <Card.Content>
          <Card.Header className='card-header'>{firstname} {lastname}</Card.Header>
          <Card.Meta>
            <span className='mainSkills'>{mainSkills[0]} | {mainSkills[1]} | {mainSkills[2]}</span>
          </Card.Meta>
          {/* <Card.Description className="card-informations">
            {bio}
          </Card.Description> */}
        </Card.Content>
        {/*
        <Card.Content extra>
          <p>
            <Icon name='contact' />
            {email}
          </p>
          <p>
            <Icon name='contact' />
            {phone}
          </p>
          */}
        <Card.Content>
          <button> + Plus d'informations </button>
        </Card.Content>

      </Card>
    </div>

  );
};

export default Freelance;
