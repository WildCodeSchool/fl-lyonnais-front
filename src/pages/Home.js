import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';
import SearchBar from '../components/SearchBar';

function Home () {
  return (
    <div className='home'>
      <Header />
      <img src='https://www.1zoom.me/big2/37/236418-Sepik.jpg' width='200' alt='Logo du site Freelance Lyonnais' className='logoHome' />
      <div className='form'>
        <SearchBar />
      </div>
      <main>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid, at cum cumque deleniti eligendi error eveniet expedita, in minima molestias nesciunt pariatur quae qui quo quos tempore voluptas?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid, at cum cumque deleniti eligendi error eveniet expedita, in minima molestias nesciunt pariatur quae qui quo quos tempore voluptas?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid, at cum cumque deleniti eligendi error eveniet expedita, in minima molestias nesciunt pariatur quae qui quo quos tempore voluptas?</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
