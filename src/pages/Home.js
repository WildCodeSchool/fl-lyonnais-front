import React from 'react'
import Header from '../components/Header'

function home () {
  return (
    <div className='home'>
      Les Freelances Lyonnais - Front office - Home
      <Header/>
      <img src="" alt="" className="logoHome"/>
      <form>
        <input type="text" className="searchBar" name=""/>
      </form>
    </div>
  )
}

export default home;

