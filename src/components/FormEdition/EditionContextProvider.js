import React from 'react';
import EditionContext from './EditionContext';

class EditionContextProvider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
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
      email: '',

      street: '',
      zip_code: '',
      city: '',
      // References
      nameReferenceList: [],
      imageReferenceList: [],
      urlReferenceList: [],
      // Tag
      tagNameChosen: [],
      idTagList: []
    };
  }

  handleUrlLink = (urlValueAdded) => {
    const urlReferenceListAdded = this.state.urlReferenceList;
    urlReferenceListAdded.push(urlValueAdded);
    this.setState({ urlReferenceList: urlReferenceListAdded });
  }

  handleNameReferenceList = (e) => {
    const projectNameList = this.state.nameReferenceList.slice();
    projectNameList.push(e);
    this.setState({ nameReferenceList: projectNameList });
  }

  handleFile = (e) => {
    const imageReferenceListAdded = this.state.imageReferenceList.slice();
    imageReferenceListAdded.push(e);
    console.log('new state', this.state.imageReferenceList);
    this.setState({ imageReferenceList: imageReferenceListAdded });
  }

  handleAdressFormChange = (e) => {
    const targetProp = e.target.name.toLowerCase();
    this.setState({ ...this.state, [targetProp]: e.target.value });
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
        <EditionContext.Provider value={{ ...this.state, handleUrlLink: this.handleUrlLink, handleAdressFormChange: this.handleAdressFormChange, handleTag: this.handleTag, handleTagId: this.handleTagId, addIdTagIdsChosen: this.addIdTagIdsChosen, handleReferencesName: this.handleReferencesName, handleNameReferenceList: this.handleNameReferenceList, setNameReferenceList: this.setNameReferenceList, cleanProjectState: this.cleanProjectState, handleFile: this.handleFile }}>
          {this.props.children}
        </EditionContext.Provider>
      </div>
    );
  }
}

export default EditionContextProvider;
