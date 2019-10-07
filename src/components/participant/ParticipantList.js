import React, { Component } from 'react';
import ParticipantListFom from './ParticipantListForm';
import ParticipantListContent from './ParticipantListContent';
import './participant.scss';
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

  updateParticipant = (data, index) => {
    const { participants } = this.state;

    let updatedParticipants = participants;

    updatedParticipants[index] = data;

    this.setState({ participants: updatedParticipants });
  };

  handleSubmit = data => {
    this.setState({ participants: [...this.state.participants, data] });
  };

  sortBy = type => {
    const { participants } = this.state;

    let sortParticipants = participants.sort((a, b) => {
      return a[type] > b[type] ? 1 : -1;
    });

    this.setState({ participants: sortParticipants });
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
            updateParticipant={this.updateParticipant}
            sortBy={this.sortBy}
          />
        </div>
      </div>
    );
  }
}

export default ParticipantList;
