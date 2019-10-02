import React, { Component } from 'react';
import ParticipantListFilter from './ParticipantListFilter';
import Participant from './Participant';
import './participant-list.scss';

class ParticipantListContent extends Component {
  render() {
    const { participants } = this.props;

    const items = participants.map((participant, index) => {
      return <Participant key={index} data={participant} />;
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
