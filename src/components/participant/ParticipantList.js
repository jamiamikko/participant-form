import React, { Component } from 'react';
import ParticipantListFom from './ParticipantListForm';
import ParticipantListContent from './ParticipantListContent';
import './participant-list.scss';
import mockData from '../../data/participants.json';

class ParticipantList extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      participants: mockData.participants
    };

    this.state = this.initialState;
  }

  deleteParticipant = participantId => {
    const { participants } = this.state;

    this.setState({
      participants: participants.filter(participant => {
        return participant.id !== participantId;
      })
    });
  };

  handleSubmit = data => {
    this.setState({ participants: [...this.state.participants, data] });
  };

  render() {
    const { participants } = this.state;

    return (
      <div className="participant-list">
        <h2 className="participant-list__heading">List of participants</h2>
        <div>
          <ParticipantListFom handleSubmit={this.handleSubmit} />
          <ParticipantListContent
            participants={participants}
            deleteParticipant={this.deleteParticipant}
          />
        </div>
      </div>
    );
  }
}

export default ParticipantList;
