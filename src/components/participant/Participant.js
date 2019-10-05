import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './participant-list.scss';

class Participant extends Component {
  render() {
    const data = this.props.data;

    return (
      <div className="participant">
        <div className="participant__info">
          <p>
            {data.name} - {data.email} {data.phone}
          </p>
        </div>
        <div className="participant__actions">
          <button className="participant__button">
            <EditIcon />
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
