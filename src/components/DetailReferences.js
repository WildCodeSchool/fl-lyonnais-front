import React from 'react';
import '../styles/Detail.scss';

function DetailReferences ({ freelance }) {
  return (
    <div>
      <h3 className='detailh2'>Mes Références</h3>
      <div className='carousel'>
        {references.map(reference => {
          return (
            <div className='reference' key={reference.id}>
              <img src={reference.image} alt={reference.name} />
              <p>{reference.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailReferences;

const references = [
  {
    name: 'Redbull1',
    image: 'https://enseignestickers.com/wp-content/uploads/2017/11/red-bull-1.jpg',
    link: 'https://www.redbull.com/fr-fr/'
  },
  {
    name: 'Redbull2',
    image: 'https://enseignestickers.com/wp-content/uploads/2017/11/red-bull-1.jpg',
    link: 'https://www.redbull.com/fr-fr/'
  },
  {
    name: 'Redbull3',
    image: 'https://enseignestickers.com/wp-content/uploads/2017/11/red-bull-1.jpg',
    link: 'https://www.redbull.com/fr-fr/'
  },
  {
    name: 'Redbull4',
    image: 'https://enseignestickers.com/wp-content/uploads/2017/11/red-bull-1.jpg',
    link: 'https://www.redbull.com/fr-fr/'
  },
  {
    name: 'Redbull5',
    image: 'https://enseignestickers.com/wp-content/uploads/2017/11/red-bull-1.jpg',
    link: 'https://www.redbull.com/fr-fr/'
  },
  {
    name: 'Redbull6',
    image: 'https://enseignestickers.com/wp-content/uploads/2017/11/red-bull-1.jpg',
    link: 'https://www.redbull.com/fr-fr/'
  }
];
