import React, { useState, useEffect } from 'react';
import Freelance from '../components/Freelance';
import '../styles/Listing.scss';
import Pagination from '../components/Pagination';
import axios from 'axios';

const Listing = () => {
  const [freelances, setFreelances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [freelancesPerPage] = useState(15);

  useEffect(() => {
    const fetchFreelances = async () => {
      setLoading(true);
      const res = await axios.get(process.env.REACT_APP_API_URL + '/freelances');
      setFreelances(res.data.data);
      setLoading(false);
    };

    fetchFreelances();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Get current freelances
  const indexOfLastFreelance = currentPage * freelancesPerPage;
  const indexOfFirstFreelance = indexOfLastFreelance - freelancesPerPage;
  const currentFreelances = freelances.slice(indexOfFirstFreelance, indexOfLastFreelance);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='Listing'>
      <ul className='everyFreelanceCards'>
        <li>
          {currentFreelances.map(freelance => (<Freelance id={freelance.id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />))}
        </li>
      </ul>
      <Pagination
        freelancesPerPage={freelancesPerPage}
        totalFreelances={freelances.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Listing;
