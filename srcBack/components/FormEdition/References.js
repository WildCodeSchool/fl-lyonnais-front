import React from 'react';
import "../../styles/References.css";
import RefsList from './RefsList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import UploadButtons from '../UploadButtons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EditionContext from './EditionContext';


library.add(faTrash);


class References extends React.Component {
  static contextType = EditionContext;
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      const { handleReferencesName } = this.context;
      handleReferencesName(this.state.items)
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }
  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        console.log(item.key + "    " + key);
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }
  render() {


    return (
      <div className='references'>
        <div>
          <p className="prescrition-title">Renseigner vos références</p>
          <RefsList
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Entrer un projet"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <Grid item xs={12} justifyContent="center">
              <Typography variant="h6" gutterBottom color="primary">
                Photo des projets
              </Typography>
              <UploadButtons className='uploadbutton' />
            </Grid>
            {/* <AddButton type="submit" /> */}
          </form>
        </div>
      </div>
    );
  }
}

export default References;
