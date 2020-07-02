import React, { Component } from 'react';
import DetailBio from '../components/DetailBio';
import DetailReferences from '../components/DetailReferences';
import DetailSkills from '../components/DetailSkills';
import DetailContact from '../components/DetailContact';
import axios from 'axios';

class Detail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      freelances: []
    };
  }

  componentDidMount () {
    axios
      .get(process.env.REACT_APP_API_URL + '/freelance/2')
      .then(response => response.data)
      .then(data => {
        this.setState({
          freelances: data.data,
          tags: data.tags
        });
      });
  }

  render () {
    const { freelances } = this.state;

    return (
      <div>
        <div className='Detail'>
          <DetailBio freelances={freelances} />
          <DetailReferences freelances={freelances} />
          <DetailSkills freelances={freelances} />
          <DetailContact freelances={freelances} />
        </div>
      </div>
    );
  }
}

export default Detail;
