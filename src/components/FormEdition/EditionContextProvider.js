import React from 'react';
import EditionContext from './EditionContext';
import uniqid from 'uniqid';

class EditionContextProvider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      freelanceId: '',
      // données BDD freelance
      url_photo: '',
      phone_number: '',
      average_daily_rate: null,
      url_web_site: '',
      job_title: '',
      bio: '',
      vat_number: '',
      is_active: 1,
      address_id: '',

      street: '',
      zip_code: '',
      city: '',
      // References
      references: [],
      // Tag
      allTags: [],
      chosenTags: [],
      freelanceExists: false,

      modalOpen: false,
      newReferenceName: '',

      errorModalMessage: ''
    };
  }

  showErrorMessage = (message) => {
    this.setState({ errorModalMessage: message, modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  setFreelanceId = (freelanceId) => {
    this.setState({ freelanceId });
  }

  setNewReferenceName = (name) => {
    this.setState({ newReferenceName: name });
  }

  setUrlPhoto = (image) => {
    this.setState({ url_photo: image });
  }

  sendFlDatasToFormEdition = (dataRetrivedAPI) => {
    if (dataRetrivedAPI.freelance) {
      this.setState({ freelanceExists: true });
    }
    this.setState({ ...dataRetrivedAPI.freelance });
    this.setState({ references: dataRetrivedAPI.references || [] });
    this.setState({ chosenTags: dataRetrivedAPI.tags || [] });
    this.setState({ ...dataRetrivedAPI.user });
    if (dataRetrivedAPI.address) {
      const { street, zip_code, city } = dataRetrivedAPI.address;
      this.setState({ street, zip_code, city });
    }
  }

  setAllTags = (tags) => {
    this.setState({ allTags: tags });
  }

  setChosenTags = (tags) => {
    this.setState({ chosenTags: tags });
  }

  deleteChosenTag = (tagId) => {
    this.setState({
      chosenTags: this.state.chosenTags.filter(
        (tag) => tag.id !== tagId
      )
    });
  }


  handleNameReferenceList = (e) => {
    const projectNameList = this.state.nameReferenceList.slice();
    projectNameList.push(e);
    this.setState({ nameReferenceList: projectNameList });
  }

  addReference = (refName) => {
    const newReference = {
      id: uniqid(),
      name: this.state.newReferenceName,
      image: '',
      url: ''
    };
    this.setState({ references: [...this.state.references, newReference] });
    window.scrollTo(0, 0);
    this.setNewReferenceName('');
  }

  deleteReference = (refId) => {
    this.setState({
      references: this.state.references.filter(
        (ref) => ref.id !== refId
      )
    });
  }

  setReferenceField = (refId, fieldName, fieldValue) => {
    const referencesCopy = this.state.references.slice();
    const reference = referencesCopy.find((ref) => {
      return ref.id === refId;
    });
    reference[fieldName] = fieldValue;
    this.setState({ references: referencesCopy });
  }

  handleFile = (e) => {
    const imageReferenceListAdded = this.state.imageReferenceList.slice();
    imageReferenceListAdded.push(e);
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
        <EditionContext.Provider value={{ ...this.state, setFreelanceId: this.setFreelanceId, setNewReferenceName: this.setNewReferenceName, closeModal: this.closeModal, showErrorMessage: this.showErrorMessage, clearUrlPro: this.clearUrlPro, setUrlPhoto: this.setUrlPhoto, sendFlDatasToFormEdition: this.sendFlDatasToFormEdition, deleteChosenTag: this.deleteChosenTag, setChosenTags: this.setChosenTags, setAllTags: this.setAllTags, deleteReference: this.deleteReference, setReferenceField: this.setReferenceField, addReference: this.addReference, handleUrlLink: this.handleUrlLink, handleAdressFormChange: this.handleAdressFormChange, handleTag: this.handleTag, handleTagId: this.handleTagId, addIdTagIdsChosen: this.addIdTagIdsChosen, handleReferencesName: this.handleReferencesName, handleNameReferenceList: this.handleNameReferenceList, setNameReferenceList: this.setNameReferenceList, cleanProjectState: this.cleanProjectState, handleFile: this.handleFile }}>
          {this.props.children}
        </EditionContext.Provider>
      </div>
    );
  }
}

export default EditionContextProvider;
