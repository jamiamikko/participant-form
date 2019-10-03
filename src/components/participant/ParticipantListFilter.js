import React, { Component } from 'react';
import './participant-list.scss';

class ParticipantListFilter extends Component {
  render() {
    return (
      <div className="participant-list__filter-wrapper">
        <button className="participant-list__filter participant-list__filter--name">Name</button>
        <button className="participant-list__filter participant-list__filter--email">
          E-mail address
        </button>
        <button className="participant-list__filter participant-list__filter--phone">
          Phone number
        </button>
      </div>
    );
  }
}

export default ParticipantListFilter;
