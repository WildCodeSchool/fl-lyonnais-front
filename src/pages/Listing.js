import React, { Component } from 'react';
import Freelance from '../components/Freelance2';
import '../styles/Listing.scss';
// import freelances from '../test/people';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { generateKey } from '../functionshelper'


class Listing extends Component {
  constructor (props) {
    super(props);
    this.state = {
      freelances: []
    };
  }

  componentDidMount () {
    axios
      .get('https://bridge.buddyweb.fr/api/freelancers/test')
      .then(response => response.data)
      .then(data => {
        this.setState({
          freelances: data

        });
      });
  }

  render () {
    const { freelances } = this.state;

    return (
      <div className='Listing'>

        <Link to='/detail'>
          <ul className='everyFreelanceCards'>
            {freelances.map(freelance => <Freelance key={generateKey(freelance)} id={freelance.id} firstname={freelance.firstname} lastname={freelance.lastname} urlPhoto={freelance.url_photo} job_title={freelance.job_title} />)}
          </ul>
        </Link>
      </div>
    );
  }
}

export default Listing;
