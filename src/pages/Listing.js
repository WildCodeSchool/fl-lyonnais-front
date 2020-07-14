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
      console.log('tagssssssssssss', res.data.freelances);
      setLoading(false);
    };
    fetchFreelances();
  }, [currentPage]);

  for (let i = 1; i <= Math.ceil((totalFreelances.map(tot => tot.totalAmoutOfValidFreelances)) / freelancesPerPage); i++) { pageNumbers.push(i); }
  if (loading) { return <h2>Loading...</h2>; }

  //Code Pascal
  const tagsFilterArray = tagsFilter.map(tagObject => tagObject.name)

  console.log('tagsfilterArray', tagsFilterArray)

  let result = []

  // const filterMultipleFreelanceByFlId = (arrayOfObjects) => {
  //   let resArr = [];
  //   arrayOfObjects.forEach(function(item){
  //     let i = resArr.findIndex(x => x.freelance_id == item.freelance_id);
  //     if(i <= -1){
  //       resArr.push({freelance_id: item.freelance_id, name: item.name});
  //     }
  //   });
  //   return resArr
  // }

  function filterMultipleFreelanceByFlId(arr) {
    const seen = {};
    const newArr = [];
    //Une seule itération pour chaque élement de arr
    for (const freelance of arr) {
      if (seen[freelance.freelance_id] == undefined) {
        newArr.push(freelance);
        seen[freelance.freelance_id] = true;
      }
    }
    return newArr;
  }

   if (tagsFilterArray.length) {
    // console.log('result of search : ', resultOfSearch)
    resultOfSearch.map(freelance => {
      if (freelance.tags.length !== 0) {
        for (let i = 0; i < freelance.tags.length; i++) {
          if ((tagsFilterArray.indexOf(freelance.tags[i].name)) !== -1) {
            // if ((result.indexOf( freelance )) !== -1) {
            result.push(freelance)
            // }
          }
        }
      }
      return result;
    })
  }
console.log('result : ', result);

  const compareIdApparitionsAndTagsFilterArrayLength = (flArray, tagArray) => {
    let resultId = [];
    let list = [];
    list[1] = 5;
    console.log('fl array : ', flArray);
    flArray.forEach(freelance => {
      const id = freelance.freelance_id;
      console.log('freelance id : ', id);
      if (list[id] < 1) {
        let counter = list[id];
        counter++;
        list[id] = counter;
      }
      else {
        list[id] = 1
      }
    })

    const tagArrayLength = tagArray.length
    console.log('tagArrayLength : ', tagArrayLength);
    console.log('longueur de liste : ', list.length, list);
      list.forEach(flId => {
        console.log('liste de freelance : ', flId, list[flId]);
        if (list[flId] === tagArray.length) {
          resultId.push(flId)
        }
      })
    return (resultId)

  }

  const freelancesIdMatchAllTags = compareIdApparitionsAndTagsFilterArrayLength(result, tagsFilterArray);
  console.log('Liste des freelance qui ont tous les tags sélectionnés : ',freelancesIdMatchAllTags);

  //const arrayOfFreelanceWithChosenTags = filterMultipleFreelanceByFlId(result)
  //console.log(arrayOfFreelanceWithChosenTags)
  const arrayOfFreelanceWithChosenTags = freelancesIdMatchAllTags;

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
