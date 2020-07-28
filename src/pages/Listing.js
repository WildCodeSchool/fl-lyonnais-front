import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import Freelance from '../components/Freelance';
import './Listing.scss';
import { useHistory } from 'react-router-dom';
import API from '../API';
import SearchContext from '../components/Detail/SearchContext';
const queryString = require('query-string');
const title = 'Liste de freelances';

const Listing = (props) => {
  const [freelances, setFreelances] = useState([]);
  const [totalFreelances, setTotalFreelances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [freelancesPerPage] = useState(20);
  const pageNumbers = [];
  const { search } = useContext(SearchContext);
  const history = useHistory();
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    const searchParams = queryString.parse(window.location.search, { arrayFormat: 'index', skipNull: true });
    const urlQuery = queryString.stringify({
      ...searchParams, page: pageNumber
    }, { arrayFormat: 'index', skipNull: true });
    history.push('/liste_freelance?' + urlQuery);
  };

  useEffect(() => {
    const fetchFreelances = async () => {
      setLoading(true);
      const res = await API.get('/freelances' + props.location.search);
      setFreelances(res.data.freelances);
      setTotalFreelances(res.data.freelanceTotalAmount);
      setLoading(false);
    };
    fetchFreelances();
  }, [props.location.search]);

  const searchParams = queryString.parse(props.location.search, { arrayFormat: 'index', skipNull: true });

  useEffect(() => {
    if (searchParams.page) setCurrentPage(parseInt(searchParams.page));
  }, [searchParams.page]);

  if (totalFreelances >= freelancesPerPage) { for (let i = 1; i <= Math.ceil(totalFreelances / freelancesPerPage); i++) { pageNumbers.push(i); } }

  const paginationLinks = <nav>
    <ul className='pagination'>
      {pageNumbers.map(number => (<li key={number} onClick={() => paginate(number)} className={currentPage === number ? 'currentPage' : 'page-link'}>{number}</li>))}
    </ul>
  </nav>;

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
          {paginationLinks}
          {search && <p>{totalFreelances} résultat(s) pour votre mot-clé "{search}".</p>}
          <ul className='everyFreelanceCards' style={{ opacity: loading ? 0.7 : 1 }}>
            <li>
              {freelances.map(freelance => (<Freelance key={freelance.id} id={freelance.id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />))}
            </li>
          </ul>
          {paginationLinks}
        </div>
      </div>
    </div>
  );
};

export default Listing;
