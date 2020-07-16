import React, { useState, useEffect, useContext } from 'react';
import Freelance from '../components/Freelance';
import FilterTags from '../components/Filter';
import './Listing.scss';
import { Link } from 'react-router-dom';
import API from '../API';
import SearchContext from '../components/Detail/SearchContext';
const lodash = require('lodash/array');
const queryString = require('query-string');

const Listing = () => {
  const [freelances, setFreelances] = useState([]);
  const [totalFreelances, setTotalFreelances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [freelancesPerPage] = useState(20);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const pageNumbers = [];
  const { resultOfSearch, tagsFilter, handleTagsFilter, tjmMarkers, search } = useContext(SearchContext);

  useEffect(() => {
    const fetchFreelances = async () => {
      setLoading(true);

      // Mise en forme du paramètre search pour l'envoi par URL
      const searchList = queryString.stringify({ search: search.split(/\W+/) }, {arrayFormat: 'index',skipNull: true});

      const res = await API.get('/freelances/?page=' + currentPage + '&flperpage=' + freelancesPerPage + '&' + searchList);
      console.log(res.data);
      setFreelances(res.data.freelances);
      setTotalFreelances(res.data.freelanceTotalAmount);
      console.log('Total FL in useEffect',totalFreelances)
      console.log('tagssssssssssss', res.data.freelances);
      setLoading(false);
    };
    fetchFreelances();
  }, [currentPage, search]);

  // Liste de tous les tags des freelances sur la page
  function tagList(freelances) {
    let freelanceTags = [];
    freelances.forEach(f => {
      if (f.tags.length > 0) {
        f.tags.map(t => {freelanceTags.push(t.name)});
      }
    })
    return freelanceTags;
  };

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
    console.log(totalFreelances)
    for (let i = 1; i <= Math.ceil(totalFreelances/ freelancesPerPage); i++) { pageNumbers.push(i); }
    if (loading) { return <h2>Loading...</h2>; }
  

  // Conversion du tableau d'objets des tags sélectionnés en tableau "simple" de noms de tags
  //const tagsFilterArray = tagsFilter.map(tagObject => tagObject.name)

  // Récupération de la list des tags des freelances affichés
  const tagsFilterArray = tagList(freelances);
  handleTagsFilter(tagsFilterArray);
  // Appel de la fonction de filtrage par tag
  console.log('Résultats de la recherche : ', resultOfSearch);
  const arrayOfFreelanceWithChosenTags = tagFilters(resultOfSearch.length ? resultOfSearch : freelances, tagsFilterArray)
  const tagsUsed = freelances.map(t => t.tags)

  // Appel de la fonction de filtrage par tag
  // const arrayOfFreelanceWithChosenTags = tagFilters(freelances, tagsFilterArray);
  // console.log('arrayOfFreelanceWithChosenTags : ', arrayOfFreelanceWithChosenTags);
  const arrayOfFreelanceWithChosenTags = freelances;
  
  return (
    <div className='Listing'>
      <h1>Liste de Freelance Lyonnais</h1>
      <div className='ListingFilter'>
        <FilterTags tagsUsed={tagsUsed} className='FilterTags' />
        <div>
          <ul className='everyFreelanceCards'>
            <li>
              {arrayOfFreelanceWithChosenTags.length !==0 ?
                 arrayOfFreelanceWithChosenTags.map(freelance => (<Freelance id={freelance.id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />))
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
