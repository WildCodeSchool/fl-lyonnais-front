import React, { Component } from 'react';
import Freelance from '../components/Freelance2';
import '../styles/Listing.scss';
//import freelances from '../test/people';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freelances: []
    };
  }
  
  componentDidMount() {
    axios
      .get('https://bridge.buddyweb.fr/api/freelancers/test')
      .then(response => response.data)
      .then(data => {
        this.setState({
        freelances: data
        
      });
    });
    
  }
  render() {
    const { freelances } = this.state;

    return (
      <div className='Listing'>
        
        <Link to='/detail'>
          <ul className='everyFreelanceCards'>
            {freelances.map(freelances => <Freelance id={freelances.id} firstname={freelances.firstname} lastname={freelances.lastname} urlPhoto={freelances.url_photo} job_title={freelances.job_title} />)}
          </ul>
        </Link>
      </div>
    );
  }
}

export default Listing;
