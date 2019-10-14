import React, { Component } from 'react';
import ParticipantListSort from './participant-list-sort';
import Participant from './participant';

import './participant-list.scss';

class ParticipantList extends Component {
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
      <table className="participant-list">
        <ParticipantListSort sortBy={sortBy} />
        <tbody>{items}</tbody>
      </table>
    );
  }
}

export default ParticipantList;
