import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DetailBio from '../components/Detail/DetailBio';
import DetailSkills from '../components/Detail/DetailSkills';
import DetailContact from '../components/Detail/DetailContact';
import API from '../API';
import Buttons from '../components/Buttons';
import AuthContext from '../components/AuthContext';
import Carousel from '../components/Detail/Carousel';




function Detail(props) {

  const [freelance, setFreelance] = useState({})
  const [tags, setTags] = useState([])
  const [references, setReferences] = useState([])
  const [is_active, setIsActive] = useState()
  const { id } = useParams()

  useEffect(() => {
    API.get('/freelances/' + id)
      .then(response => response.data)
      .then(data => {
        setFreelance(data.freelance)
        setTags(data.tags);
        setReferences(data.references);
        setIsActive(data.freelance.is_active)
      })
  }, [id]);

  const { user } = useContext(AuthContext)
  return (

    <div>
      {(is_active === 1 || is_active === 0) && (user && user.freelance_id == id) && <Buttons id={id} is_active={is_active} />}
      <h1>Page détail freelance</h1>
      <div className='Detail'>
        <DetailBio freelances={freelance} />
        <div className='responsiveSkillsContact'>
          <DetailSkills tags={tags} freelances={freelance} />
          {references.length !== 0 && <Carousel references={references} />}
          <DetailContact freelances={freelance} />
        </div>
      </div>
    </div>

  );
};

export default Detail;
