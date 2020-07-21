import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet'
import Freelance from '../components/Freelance';
import './Listing.scss';
import { Link, useParams, useHistory } from 'react-router-dom';
import API from '../API';
import SearchContext from '../components/Detail/SearchContext';
const queryString = require('query-string');
const title = 'Liste de freelances';

const Listing = () => {
  const [freelances, setFreelances] = useState([]);
  const [totalFreelances, setTotalFreelances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [freelancesPerPage] = useState(20);
  const pageNumbers = [];
  const { search } = useContext(SearchContext);
  const history = useHistory();
  const { url } = useParams();
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    const searchParams = queryString.parse(window.location.search, {arrayFormat: 'index', skipNull: true})
    let urlQuery = queryString.stringify({
    ...searchParams, page: pageNumber
    }, { arrayFormat: 'index', skipNull: true });
    console.log(urlQuery)
    history.push('/liste_freelance/?' + urlQuery)
    console.log('/liste_freelance?' + urlQuery)
  }

  useEffect(() => {
    const fetchFreelances = async () => {
      setLoading(true);
      const res = await API.get(window.location.search ? '/freelances/' + window.location.search : '/freelances/');
      setFreelances(res.data.freelances);
      setTotalFreelances(res.data.freelanceTotalAmount);
      setLoading(false);
    };
    fetchFreelances();
  }, [window.location.search]);

  if (totalFreelances >= freelancesPerPage) {for (let i = 1; i <= Math.ceil(totalFreelances/ freelancesPerPage); i++) { pageNumbers.push(i); }}
  if (loading) { return <h2>Chargement...</h2>; }

  return (
    <div className='Listing'>
      <Helmet>
        <title>
        {title}
        </title>
      </Helmet>
      <h1>Les Freelance Lyonnais</h1>
      <div className='ListingFilter'>
        <div>
          <nav>
            <ul className='pagination'>
              {pageNumbers.map(number => (<li key={number}><Link onClick={() => paginate(number)} to='#' className={currentPage === number ? 'currentPage' : 'page-link'}>{number}</Link></li>))}
            </ul>
          </nav>
          {search && <p>{totalFreelances} résultat(s) pour votre mot-clé "{search}".</p>}
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
