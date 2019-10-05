import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './participant-list.scss';

class Participant extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: this.props.data.name,
      email: this.props.data.email,
      phone: this.props.data.phone,
      editMode: false
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  toggleEditMode = () => {
    let changeMode = !this.state.editMode;

    this.setState({ editMode: changeMode });
  };

  saveChanges = () => {
    console.log('Nui');
  };

  render() {
    const data = this.props.data;

    return (
      <div className="participant">
        <div className={`participant__info ${!this.state.editMode ? '' : 'hidden'}`}>
          <p>
            {data.name} - {data.email} {data.phone}
          </p>
        </div>
        <div className={`participant__edit ${this.state.editMode ? '' : 'hidden'}`}>
          <input
            className="participant__edit-input"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            className="participant__edit-input"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            className="participant__edit-input"
            type="tel"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />
        </div>
        <div className="participant__actions-wrapper">
          <div className={`participant__actions ${!this.state.editMode ? '' : 'hidden'}`}>
            <button className="participant__icon-button">
              <EditIcon onClick={this.toggleEditMode} />
            </button>
            <button
              className="participant__icon-button"
              onClick={() => {
                this.props.deleteParticipant(data.id);
              }}>
              <DeleteIcon />
            </button>
          </div>
          <div className={`participant__actions--edit ${this.state.editMode ? '' : 'hidden'}`}>
            <button className="participant__edit-button" onClick={this.toggleEditMode}>
              Cancel
            </button>
            <button
              className="participant__edit-button participant__edit-button--save"
              onClick={this.saveChanges}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Participant;
