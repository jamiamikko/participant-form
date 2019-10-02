import React, { Component } from 'react';
import ParticipantListHeader from './ParticipantListHeader';
import ParticipantListContent from './ParticipantListContent';
import './participant-list.scss';
import mockData from '../data/participants.json';

class ParticipantList extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      participants: mockData.participants
    };

    this.state = this.initialState;
  }

  handleSubmit = data => {
    this.setState({ participants: [...this.state.participants, data] });
  };

  render() {
    const { participants } = this.state;

    return (
      <div className="participant-list">
        <h2 className="participant-list__heading">List of participants</h2>
        <div>
          <ParticipantListHeader handleSubmit={this.handleSubmit} />
          <ParticipantListContent participants={participants} />
        </div>
      </div>
    );
  }
}

export default ParticipantList;
