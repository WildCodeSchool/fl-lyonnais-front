import React, { Component } from 'react';
import DetailBio from '../components/Detail/DetailBio';
import DetailReferences from '../components/Detail/DetailReferences';
import DetailSkills from '../components/Detail/DetailSkills';
import DetailContact from '../components/Detail/DetailContact';
import API from '../API';
import Buttons from '../components/Buttons';
import AuthContext from '../components/AuthContext';

class Detail extends Component {
  static contextType = AuthContext
  constructor (props) {
    super(props);
    this.state = {
      freelances: [],
      tags: [],
      references: [],
      id: this.props.match.params.id
    };
  }

  componentDidMount () {
    API.get('/freelances/' + this.state.id)
      .then(response => response.data)
      .then(data => {
        this.setState({
          freelances: data.freelance,
          tags: data.tags,
          references: data.references,
          is_active: data.freelance.is_active
        });
      });
  }

  render () {
    const { freelances, tags, references, is_active } = this.state;
    const { user } = this.context

    return (
      <div>
        {(is_active === 1 || is_active === 0) && (user && user.freelance_id == this.state.id) && <Buttons id={this.state.id} is_active={is_active}/>}
        <h1>Page détail freelance</h1>
        <div className='Detail'>
          <DetailBio freelances={freelances} />
          <DetailReferences references={references} />
          <div className='responsiveSkillsContact'>
            <DetailSkills tags={tags} freelances={freelances} />
            <DetailContact freelances={freelances} />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
