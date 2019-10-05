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

  toggleEditMode = () => {
    let changeMode = !this.state.editMode;

    this.setState({ editMode: changeMode });
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
          <input type="text" name="name" value={this.state.name} />
          <input type="email" name="email" value={this.state.email} />
          <input type="tel" name="phone" value={this.state.phone} />
        </div>
        <div className="participant__actions">
          <button className="participant__button">
            <EditIcon onClick={this.toggleEditMode} />
          </button>
          <button
            className="participant__button"
            onClick={() => {
              this.props.deleteParticipant(data.id);
            }}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default Participant;
