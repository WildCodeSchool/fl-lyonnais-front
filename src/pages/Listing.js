import React, { useState, useEffect, useContext } from 'react';
import Freelance from '../components/Freelance';
import FilterTags from '../components/Filter';
import './Listing.scss';
import { Link } from 'react-router-dom';
import API from '../API';
import SearchContext from '../components/Detail/SearchContext';

const Listing = () => {
  const [freelances, setFreelances] = useState([]);
  const [totalFreelances, setTotalFreelances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [freelancesPerPage] = useState(20);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const pageNumbers = [];
  const { resultOfSearch, tagsFilter, tjmMarkers } = useContext(SearchContext);

  useEffect(() => {
    const fetchFreelances = async () => {
      setLoading(true);
      const res = await API.get('/freelances/?page=' + currentPage + '&step=' + freelancesPerPage);
      setFreelances(res.data.freelances);
      setTotalFreelances(res.data.freelanceTotalAmount);
      console.log(res.data.freelances);
      setLoading(false);
    };
    fetchFreelances();
  }, [currentPage]);

  for (let i = 1; i <= Math.ceil((totalFreelances.map(tot => tot.totalAmoutOfValidFreelances)) / freelancesPerPage); i++) { pageNumbers.push(i); }
  if (loading) { return <h2>Loading...</h2>; }
  // console.log(tagsFilter)
  console.log(freelances);
  return (
    <div className='Listing'>
      <h1>Liste de Freelance Lyonnais</h1>
      <div className='ListingFilter'>
        <FilterTags className='FilterTags' />
        <div>
          <ul className='everyFreelanceCards'>
            <li>
              {resultOfSearch.length ?

                // tableau avec FL qui ont tags séléectionnés
                //resultOfSearch.filter( freelance => {
                // let arrayOfFreelanceWithChosenTags = [];
                // resultOfSearch.forEach( freelance => {
                //   if ( tagsFilter.indexOf(freelance.tag) !== -1) {
                //     arrayOfFreelanceWithChosenTags.push(freelance)
                //   }
                // })
              
              resultOfSearch.map(freelance => (<Freelance id={freelance.freelance_id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />))
              :
              freelances.map(freelance => (<Freelance id={freelance.id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />))
              }
            </li>
          </ul>
          <nav>
            <ul className='pagination'>
              {!resultOfSearch.length && pageNumbers.map(number => (<li key={number}><Link onClick={() => paginate(number)} to='#' className='page-link'>{number}</Link></li>))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Listing;
