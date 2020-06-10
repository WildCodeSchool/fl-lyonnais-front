import React, { Component } from 'react';
import DetailCarousel from './DetailCarousel';

class DetailReferences extends Component {
  render () {
    return (
      <div>
        <DetailCarousel ModalProps='false' mobile='true' />
      </div>
    );
  }
}

export default DetailReferences;
