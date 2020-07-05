import React, { useState } from 'react';
import EditionContext from './EditionContext';
import { isFrenchMobile } from '../../functionshelper';
import { formatMs } from '@material-ui/core';

class EditionContextProvider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      // données BDD freelance
      url_photo: '',
      phone_number: '',
      average_daily_rate: null,
      url_web_site: '',
      job_title: '',
      bio: '',
      vat_number: '',
      last_modification_date: '2019-03-15',
      is_active: 1,
      address_id: '',
      email: '', // présent dans le wireframe mais dans aucune BDD

      street: '',
      zip_code: '',
      city: '',
      // References
      nameReferenceList: [],
      imageReferenceList: '',
      urlReferenceList: [],
      // Tag
      tagNameChosen: [],
      idTagList: []
    };
  }

  handleNameReferenceList = (e) => {
    const projectNameList = this.state.nameReferenceList;
    projectNameList.push(e)
    this.setState({nameReferenceList: projectNameList})
    this.setNameReferenceList()
  }

  handleFile = (e) => {
    const fileList = this.state.nameReferenceList.slice()
    const formData = new FormData();
    formData.append("file", e);
    fileList.push({formData})

    // const promiseFile = new Promise((res,rej) => formData.append("file", e));
    // // promiseFile.then(res => console.log(res.data))
    this.setState( {nameReferenceList: fileList})
    // axios.post('/posts', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    
  }
  cleanProjectState = (e) => {
    this.setState({nameReferenceList: []})

  }

  setNameReferenceList = () => {
    return this.state.nameReferenceList;
  }

  handleAdressFormChange = (e) => {
    const targetProp = e.target.name.toLowerCase();
    this.setState({ ...this.state, [targetProp]: e.target.value });
  }

  handleReferencesName = (items) => {
    this.setState({ nameReferenceList: items });
  }

  addIdTagIdsChosen = (id) => {
    this.setState({ idTagList: id });
  }

  handleTag = (e) => {
    const newtagName = this.state.tagNameChosen;
    if (!e.target.innerText) {
      newtagName.pop();
      this.setState({ tagNameChosen: newtagName });
    } else {
      newtagName.push(e.target.innerText);
      this.setState({ tagNameChosen: newtagName });
    } 
  }




  render () {
    return (
      <div>
        <EditionContext.Provider value={{ ...this.state, handleAdressFormChange: this.handleAdressFormChange, handleTag: this.handleTag, handleTagId: this.handleTagId, addIdTagIdsChosen: this.addIdTagIdsChosen, handleReferencesName: this.handleReferencesName, handleNameReferenceList:this.handleNameReferenceList, setNameReferenceList:this.setNameReferenceList, cleanProjectState:this.cleanProjectState, handleFile:this.handleFile }}>
          {this.props.children}
        </EditionContext.Provider>
      </div>
    );
  }
}

export default EditionContextProvider;
