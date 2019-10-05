import React, { Component } from 'react';
import ParticipantListFilter from './ParticipantListFilter';
import Participant from './Participant';
import './participant-list.scss';

class ParticipantListContent extends Component {
  render() {
    const { participants, deleteParticipant } = this.props;

    const items = participants.map((participant, index) => {
      return (
        <Participant
          key={participant.id}
          data={participant}
          deleteParticipant={deleteParticipant}
        />
      );
    });

    return (
      <div className="participant-list__content">
        <ParticipantListFilter />
        <div>{items}</div>
      </div>
    );
  }
}

export default ParticipantListContent;
