import React, { Component } from 'react';
import './participant-list.scss';

class ParticipantListHeader extends Component {
  submitForm = event => {
    event.preventDefault();

    console.log('Nui');
  };

  render() {
    return (
      <div className="participant-list__header">
        <form className="participant-form">
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            className="participant-form__input"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail address"
            className="participant-form__input"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            className="participant-form__input"
          />
          <button className="participant-form__button" onClick={this.submitForm}>
            Add new
          </button>
        </form>
      </div>
    );
  }
}

export default ParticipantListHeader;
