import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

function Home () {
  return (
    <div className='home'>
      <Header />
      <img src='' alt='' className='logoHome' />
      <form>
        <SearchBar />
      </form>
      <main>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid, at cum cumque deleniti eligendi error eveniet expedita, in minima molestias nesciunt pariatur quae qui quo quos tempore voluptas?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid, at cum cumque deleniti eligendi error eveniet expedita, in minima molestias nesciunt pariatur quae qui quo quos tempore voluptas?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid, at cum cumque deleniti eligendi error eveniet expedita, in minima molestias nesciunt pariatur quae qui quo quos tempore voluptas?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid, at cum cumque deleniti eligendi error eveniet expedita, in minima molestias nesciunt pariatur quae qui quo quos tempore voluptas?</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
