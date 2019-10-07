import React, { Component } from 'react';
import ParticipantListFilter from './ParticipantListFilter';
import Participant from './Participant';
import './participant.scss';

class ParticipantListContent extends Component {
  render() {
    const { participants, deleteParticipant, updateParticipant, sortBy } = this.props;

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
        <ParticipantListFilter sortBy={sortBy} />
        <tbody>{items}</tbody>
      </table>
    );
  }
}

export default ParticipantListContent;
