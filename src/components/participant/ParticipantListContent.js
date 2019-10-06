import React, { Component } from 'react';
import ParticipantListFilter from './ParticipantListFilter';
import Participant from './Participant';
import './participant-list.scss';

class ParticipantListContent extends Component {
  render() {
    const { participants, deleteParticipant, updateParticipant } = this.props;

    const items = participants.map((participant, index) => {
      return (
        <Participant
          key={participant.id}
          index={index}
          data={participant}
          deleteParticipant={deleteParticipant}
          updateParticipant={updateParticipant}
        />
      );
    });

    return (
      <table className="participant-list__table">
        <ParticipantListFilter />
        <tbody class="participant-list__content">{items}</tbody>
      </table>
    );
  }
}

export default ParticipantListContent;
