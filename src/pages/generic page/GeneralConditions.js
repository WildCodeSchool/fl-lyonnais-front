import React from 'react';
import './Home.scss';
import { Helmet } from 'react-helmet';

const title = 'Conditions générales';

function GeneralConditions () {
  return (
    <div className='home'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className='form' />
      <main className='homepage'>
        <h1>Conditions générales</h1>

        <div className='paragraphe'>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit :</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deleniti dolores facilis laboriosam molestiae molestias neque possimus tempora temporibus unde. Accusamus deleniti dolorem id ipsa nam necessitatibus quas ut. Ullam.</p>
        </div>

        <div className='paragraphe'>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit :</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor ducimus inventore magni officiis recusandae, reprehenderit sed. Beatae dolore harum, illo libero magnam modi nulla officiis, perspiciatis rerum vitae voluptate.</p>
        </div>

        <div className='paragraphe'>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit :</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur atque aut consectetur corporis dolorum expedita impedit inventore iure maxime molestiae perferendis porro, quod reprehenderit sed tempora unde vitae voluptatibus.</p>
        </div>

        <div className='paragraphe'>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit :</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut ducimus, explicabo hic id, illum similique sint tempore temporibus tenetur, velit voluptas? Aliquid, at aut officiis reprehenderit totam voluptate voluptatum.</p>
        </div>
      </main>
    </div>
  );
}

export default GeneralConditions;
