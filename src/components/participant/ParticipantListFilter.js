import React, { Component } from 'react';
import './participant-list.scss';

class ParticipantListFilter extends Component {
  render() {
    return (
      <thead className="participant-list__filter-wrapper">
        <tr className="participant-list__filter-grid">
          <th>
            <button
              className="participant-list__filter"
              onClick={() => {
                this.props.sortBy('name');
              }}>
              Name
            </button>
          </th>
          <th>
            <button
              className="participant-list__filter"
              onClick={() => {
                this.props.sortBy('email');
              }}>
              E-mail address
            </button>
          </th>
          <th>
            <button
              className="participant-list__filter"
              onClick={() => {
                this.props.sortBy('phone');
              }}>
              Phone number
            </button>
          </th>
        </tr>
      </thead>
    );
  }
}

export default ParticipantListFilter;
