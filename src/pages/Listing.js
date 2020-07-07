import React, { useState, useEffect } from 'react';
import Freelance from '../components/Freelance';
import FilterTags from '../components/Filter';
import './Listing.scss';
import { Link } from 'react-router-dom';
import API from '../API';

const Listing = () => {
  const [freelances, setFreelances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [freelancesPerPage] = useState(15);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const pageNumbers = [];
  const totalFreelances = 60;

  useEffect(() => {
    const fetchFreelances = async () => {
      setLoading(true);
      const res = await API.get('/freelances/page?page=' + currentPage + '&step=' + freelancesPerPage);
      setFreelances(res.data.data);
      setLoading(false);
    };
    fetchFreelances();
  }, []);

  console.log(freelances);
  console.log(currentPage);

  if (loading) { return <h2>Loading...</h2>; }
  for (let i = 1; i <= Math.ceil(totalFreelances / freelancesPerPage); i++) { pageNumbers.push(i); }

  return (
    <div className='Listing'>
      <h1>Liste de Freelance Lyonnais</h1>
      <div className='ListingFilter'>
        <FilterTags className='FilterTags' />
        <div>
          <ul className='everyFreelanceCards'>
            <li>
              {freelances.map(freelance => (<Freelance id={freelance.id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />))}
            </li>
          </ul>
          <nav>
            <ul className='pagination'>
              {pageNumbers.map(number => (<li key={number}><Link onClick={() => paginate(number)} to='#' className='page-link'>{number}</Link></li>))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Listing;
