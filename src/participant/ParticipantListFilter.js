import React, { Component } from 'react';
import './participant-list.scss';

class ParticipantListFilter extends Component {
  render() {
    return (
      <div className="participant-list__filter-wrapper">
        <button className="participant-list__filter">Name</button>
        <button className="participant-list__filter">E-mail address</button>
        <button className="participant-list__filter">Phone number</button>
      </div>
    );
  }
}

export default ParticipantListFilter;
