import React, { Component } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class ParticipantListFilter extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      sort: {
        name: false,
        email: false,
        phone: false
      }
    };

    this.state = this.initialState;
  }

  activeClass = type => {
    return this.state.sort[type] ? 'active' : '';
  };

  sortBy = type => {
    let newSortState = {
      name: false,
      email: false,
      phone: false
    };

    newSortState[type] = true;

    this.setState({ sort: newSortState });

    this.props.sortBy(type);
  };

  render() {
    return (
      <thead className="participant-list__filter-wrapper">
        <tr className="participant-list__filter-grid">
          <th>
            <button
              className={`participant-list__filter ${this.activeClass('name')}`}
              onClick={() => {
                this.sortBy('name');
              }}>
              Name
              <ArrowDownwardIcon
                className={`participant-list__filter-icon ${this.activeClass('name')}`}
              />
            </button>
          </th>
          <th>
            <button
              className={`participant-list__filter ${this.activeClass('email')}`}
              onClick={() => {
                this.sortBy('email');
              }}>
              E-mail address
              <ArrowDownwardIcon
                className={`participant-list__filter-icon ${this.activeClass('email')}`}
              />
            </button>
          </th>
          <th>
            <button
              className={`participant-list__filter ${this.activeClass('phone')}`}
              onClick={() => {
                this.sortBy('phone');
              }}>
              Phone number
              <ArrowDownwardIcon
                className={`participant-list__filter-icon ${this.activeClass('phone')}`}
              />
            </button>
          </th>
        </tr>
      </thead>
    );
  }
}

export default ParticipantListFilter;
