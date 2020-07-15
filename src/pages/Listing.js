import React, { useState, useEffect, useContext } from 'react';
import Freelance from '../components/Freelance';
import FilterTags from '../components/Filter';
import './Listing.scss';
import { Link } from 'react-router-dom';
import API from '../API';
import SearchContext from '../components/Detail/SearchContext';
const lodash = require('lodash/array');

const Listing = () => {
  const [freelances, setFreelances] = useState([]);
  const [totalFreelances, setTotalFreelances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [freelancesPerPage] = useState(20);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const pageNumbers = [];
  const { resultOfSearch, tagsFilter, tjmMarkers } = useContext(SearchContext);
  // const { resetTagsFilter } = useContext(SearchContext);

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

  // Filtrage sur les tags
  function tagFilters(freelances, tagsFilterArray) {
    let resultsArray = [];
    let freelancesWithMatchingTags = [];
    if (tagsFilterArray.length !== 0) {
      // Lorsqu'il y a au moins un tag sélectionné
      freelances.forEach(f => {
        // Pour chaque élément du tableau freelances...
        if (f.tags.length > 0) {
          // ... et que son tableau tags n'est pas vide... 
          // ... il y a comparaison entre les tableau des tags sélectionnés : tagsFilterArray
          // et ceux du freelance : f.tags...
          const freelanceTags = f.tags.map(t => t.name);
          // ... arrangés dans un tableau (au départ c'était un tableau d'objets)
          const r = lodash.difference(tagsFilterArray, freelanceTags);
          // si le tableau résultant est vide => le freelance a tous les tags sélectionnés activés => OK
          // le freelance est alors poussé dans le tableau results
          if (r.length === 0) freelancesWithMatchingTags.push(f);
        }
      })
      resultsArray = freelancesWithMatchingTags;
      if (freelancesWithMatchingTags.length === 0) {
        alert('Aucun freelance ne correspond à votre recherche !');
        // resetTagsFilter();
      }
    }
    return resultsArray;
  }
  
  for (let i = 1; i <= Math.ceil((totalFreelances.map(tot => tot.totalAmoutOfValidFreelances)) / freelancesPerPage); i++) { pageNumbers.push(i); }
  if (loading) { return <h2>Loading...</h2>; }

  // Conversion du tableau d'objets des tags sélectionnés en tableau "simple" de noms de tags
  const tagsFilterArray = tagsFilter.map(tagObject => tagObject.name)

  // Appel de la fonction de filtrage par tag
  const arrayOfFreelanceWithChosenTags = tagFilters(freelances, tagsFilterArray)

  return (
    <div className='Listing'>
      <h1>Liste de Freelance Lyonnais</h1>
      <div className='ListingFilter'>
        <FilterTags className='FilterTags' />
        <div>
          <ul className='everyFreelanceCards'>
            <li>
              {!resultOfSearch.length ?
                  freelances.map(freelance => (<Freelance id={freelance.id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />))
                : !arrayOfFreelanceWithChosenTags.length ?
                  resultOfSearch.map(freelance => (<Freelance id={freelance.freelance_id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />))
                :
                  arrayOfFreelanceWithChosenTags.map(freelance => (<Freelance id={freelance.id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />))
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
