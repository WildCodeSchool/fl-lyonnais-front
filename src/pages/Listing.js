import React, { Component } from 'react';
import Freelance from '../components/Freelance';
import '../styles/Listing.scss';
import axios from 'axios';
import { generateKey } from '../functionshelper';
import BasicPagination from '../components/Pagination';

const elementsPerPage = 10;

class Listing extends Component {
  constructor (props) {
    super(props);
    this.state = {
      freelances: [],
      offSet: 0
    };
  }

  fetchData = async () => {
    const newOffSet = this.state.offSet + 1;
    this.setState({ offSet: newOffSet });
    await this.load(newOffSet * elementsPerPage, (newOffSet + 1) * elementsPerPage);
    console.log(this.state.dataResults);
  }

  componentDidMount () {
    axios
      .get('http://localhost:3000/freelance')
      .then(response => response.data)
      .then(data => {
        this.setState({
          freelances: data.data
        });
      });
  }

  render () {
    const { freelances } = this.state;

    return (
      <div className='Listing'>

        <ul className='everyFreelanceCards'>
          <li>
            {freelances.map(freelance => <Freelance key={generateKey(freelance)} id={freelance.id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />)}
          </li>
        </ul>
        <BasicPagination />
      </div>
    );
  }
}

export default Listing;
