import React, { useState, useEffect, useContext } from 'react';
import Freelance from '../components/Freelance';
import FilterTags from '../components/Filter';
import './Listing.scss';
import { Link } from 'react-router-dom';
import API from '../API';
import SearchContext from '../components/Detail/SearchContext';
var lodash = require('lodash/array');

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
      console.log('tagssssssssssss', res.data.freelances);
      setLoading(false);
    };
    fetchFreelances();
  }, [currentPage]);

  for (let i = 1; i <= Math.ceil((totalFreelances.map(tot => tot.totalAmoutOfValidFreelances)) / freelancesPerPage); i++) { pageNumbers.push(i); }
  if (loading) { return <h2>Loading...</h2>; }

  //Code Pascal
  const tagsFilterArray = tagsFilter.map(tagObject => tagObject.name)

  // console.log('tagsfilterArray', tagsFilterArray)
  console.log('freelances', freelances);
  
  let arrayOfFreelanceWithChosenTags = [];
  let results = [];
  if (tagsFilterArray.length !== 0) {
    // Lorsqu'il y a au moins un tag sélectionné
    freelances.forEach(f => {
      // Pour chaque élément du tableau freelances...
      //console.log('freelance : ', f);
      if (f.tags.length > 0) {
        // ... et que son tableau tags n'est pas vide... 
        // ... il y a comparaison entre les tableau des tags sélectionnés : tagsFilterArray
        // et ceux du freelance : f.tags arrangés dans un tableau
        const freelanceTags = f.tags.map(t => t.name);
        //console.log('tags sélectionnés : ', tagsFilterArray);
        const r = lodash.difference(tagsFilterArray, freelanceTags);
        // si le tableau résultant est vide => le freelance a tous les tags sélectionnés activés
        // le freelance est alors poussé dans le tableau results
        console.log('OK');
        if (r.length === 0) results.push(f);
      }
    })
    arrayOfFreelanceWithChosenTags = results;
    console.log('Results : ', results);
  } else {
    // Aucun tag sélectionné, alors on copie le contenu du tableau freelance sans le modifier
    arrayOfFreelanceWithChosenTags = freelances;
  }


  return (
    <div className='Listing'>
      <h1>Liste de Freelance Lyonnais</h1>
      <div className='ListingFilter'>
        <FilterTags className='FilterTags' />
        <div>
          <ul className='everyFreelanceCards'>
            <li>
              {resultOfSearch.length && (arrayOfFreelanceWithChosenTags.length === 0) ?
                resultOfSearch.map(freelance => (<Freelance id={freelance.freelance_id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />))
                : arrayOfFreelanceWithChosenTags.length !== 0 ?
                  arrayOfFreelanceWithChosenTags.map(freelance => (<Freelance id={freelance.id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />))
                  : freelances.map(freelance => (<Freelance id={freelance.id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />))
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
