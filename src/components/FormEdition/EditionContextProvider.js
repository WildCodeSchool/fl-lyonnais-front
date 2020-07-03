import React from 'react';
import EditionContext from './EditionContext';

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
      imageReferenceList: [],
      urlReferenceList: [],
      // Tag
      tagNameChosen: [],
      idTagList: []
    };
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

  // fetchDataToApi = () => {
  //   const payload = idTagList;
  //   console.log(idTagList);
  //   API.post('/freelances/account',payload).then( (res) => {
  //     history.push('/');
  //     alert('Ready to post')
  // }

  render () {
    return (
      <div>
        <EditionContext.Provider value={{ ...this.state, handleAdressFormChange: this.handleAdressFormChange, handleTag: this.handleTag, handleTagId: this.handleTagId, addIdTagIdsChosen: this.addIdTagIdsChosen, handleReferencesName: this.handleReferencesName }}>
          {this.props.children}
        </EditionContext.Provider>
      </div>
    );
  }
}

export default EditionContextProvider;
