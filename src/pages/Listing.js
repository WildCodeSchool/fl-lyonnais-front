import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Freelance from '../components/Freelance';
import '../styles/Listing.css';

const freelances = [
  {
    email: 'john.doe@wcs.com',
    siret: '1234567890123',
    firstname: 'John',
    lastname: 'Doe',
    urlPhoto: require('../images/photos/01.jpg'),
    phone: '+33 6 00 00 00 00',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    isActive: true
  },
  {
    email: 'SavilleMartin@armyspy.com',
    siret: '12345678901325',
    firstname: 'Martin',
    lastname: 'Saville',
    urlPhoto: require('../images/photos/02.jpg'),
    phone: '04.81.41.24.70',
    bio: 'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    isActive: true
  },
  {
    email: 'GanelonCaya@teleworm.us',
    siret: '9876543210987',
    firstname: 'Caya',
    lastname: 'Ganelon',
    urlPhoto: require('../images/photos/03.jpg'),
    phone: '01.30.70.17.62',
    bio: 'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
    isActive: true
  },
  {
    email: 'RolandLanteigne@teleworm.us',
    siret: '5824673190546',
    firstname: 'Roland',
    lastname: 'Lanteigne',
    urlPhoto: require('../images/photos/04.jpg'),
    phone: '03.02.16.17.25',
    bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
    isActive: true
  },
  {
    email: 'AngeletteBaron@dayrep.com',
    siret: '3574159820486',
    firstname: 'Angelette',
    lastname: 'Baron',
    urlPhoto: require('../images/photos/05.jpg'),
    phone: '02.11.21.50.57',
    bio: 'quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit',
    isActive: true
  },
  {
    email: 'BevisBergeron@teleworm.us',
    siret: '9632104785482',
    firstname: 'Bevis',
    lastname: 'Bergeron',
    urlPhoto: require('../images/photos/06.jpg'),
    phone: '05.03.38.34.76',
    bio: 'aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam',
    isActive: true
  }
];

function Listing (props) {
  // Construit une liste des freelances
  const outputFreelances = freelances.map(freelance => <Freelance key={freelance.email} freelance={freelance} />);

  return (
    <div className='Listing'>
      <Header />
      {outputFreelances}
      <Footer />
    </div>
  );
}

export default Listing;
