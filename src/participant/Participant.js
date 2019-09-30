import React, { Component } from 'react';
import './participant-list.scss';

class Participant extends Component {
  render() {
    const name = this.props.name;
    const email = this.props.email;
    const phone = this.props.phone;

    return (
      <div className="participant">
        <div className="participant__info">
          <p>
            {name} - {email} {phone}
          </p>
        </div>
        <div className="participant__actions">Actions</div>
      </div>
    );
  }
}

export default Participant;
