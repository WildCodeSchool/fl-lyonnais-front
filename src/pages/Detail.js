import React from 'react';
import DetailBio from '../components/DetailBio';
import DetailReferences from '../components/DetailReferences';
import DetailSkills from '../components/DetailSkills';
import DetailContact from '../components/DetailContact';

// import '../styles/Detail.css';

function Detail ({ freelance }) {
  return (
    <div>
      <div className='Detail'>
        <DetailBio freelance={freelance} />
        <DetailReferences freelance={freelance} />
        <DetailSkills freelance={freelance} />
        <DetailContact freelance={freelance} />
      </div>
    </div>
  );
}

export default Detail;
