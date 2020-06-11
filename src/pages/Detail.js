import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DetailBio from '../components/DetailBio';
import DetailReferences from '../components/DetailReferences';
import DetailSkills from '../components/DetailSkills';
import DetailContact from '../components/DetailContact';

// import '../styles/Detail.css';

function Detail ({ freelance }) {
  return (
    <div>
      <Header />
      <div className="Detail">
        <DetailBio freelance={freelance} />
        <DetailReferences freelance={freelance} />
        <DetailSkills freelance={freelance} />
        <DetailContact freelance={freelance} />
        <Footer />
      </div>
    </div>
  );
}

export default Detail;
