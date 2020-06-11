import React from 'react';
import '../styles/Home.scss';
import SearchBar from '../components/SearchBar';
import logo from '../images/logo.png';

function Home (props) {
  return (
    <div className='home'>
      <div className='logo'>
        <img src={logo} alt='Logo du site Freelance Lyonnais' className='logoHome' />
      </div>
      <div className='form'>
        <SearchBar />
      </div>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid, at cum cumque deleniti eligendi
          error eveniet expedita, in minima molestias nesciunt pariatur quae qui quo quos tempore voluptas?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad cumque eos libero molestias
          necessitatibus numquam pariatur quas quo, sequi. Ab consequatur, delectus dolor hic nemo numquam quaerat!
          Ducimus, maiores.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi, cumque dolorem enim, est fugiat
          id illum labore libero nesciunt nisi officiis quas quo quos recusandae voluptate? Est, rerum!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et sunt tempora veniam. Aliquam animi
          asperiores, aspernatur facilis magnam minima minus neque optio, quidem sequi totam veritatis! Obcaecati
          officia, reiciendis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aperiam aspernatur assumenda autem, esse
          et ipsum magnam modi odio quidem quo repudiandae sint, suscipit unde vel velit voluptates. Corporis, harum?

        </p>
      </main>
    </div>
  );
}

export default Home;
