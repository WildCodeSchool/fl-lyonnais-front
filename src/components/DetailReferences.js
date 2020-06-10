import React, { Component } from 'react';
import
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

class DetailReferences extends Component {
  render() {
    return(
      <div>
        <AutoRotatingCarousel ModalProps='false' mobile='true'/>
      </div>
    );
  };
}


export default DetailReferences;