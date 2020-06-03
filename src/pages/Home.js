import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home () {
  return (
    <div className='home'>
      Les Freelances Lyonnais - Front office - Home
      <Header/>
      <img src="" alt="" className="logoHome"/>
      <form>
        <input type="text" className="searchBar" name=""/>
      </form>
      <Footer/>
    </div>
  )
}

export default Home;