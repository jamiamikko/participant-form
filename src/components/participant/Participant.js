import React, { Component } from 'react';
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
        <div className="participant__actions">Actions</div>
      </div>
    );
  }
}

export default Participant;
