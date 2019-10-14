import React, { Component } from 'react';
import AddParticipantForm from './add-participant-form';
import ParticipantList from './participant-list';
import './participants.scss';
import mockData from '../../data/participants.json';

class Participants extends Component {
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
      <div className="participants">
        <h2 className="participants__heading">List of participants</h2>
        <AddParticipantForm handleSubmit={this.handleSubmit} />
        <ParticipantList
          participants={participants}
          deleteParticipant={this.deleteParticipant}
          updateParticipant={this.updateParticipant}
          sortBy={this.sortBy}
        />
      </div>
    );
  }
}

export default Participants;
