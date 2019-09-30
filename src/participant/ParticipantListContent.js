import React, { Component } from 'react';
import ParticipantListFilter from './ParticipantListFilter';
import Participant from './Participant';
import './participant-list.scss';

class ParticipantListContent extends Component {
  participants = [
    {
      name: 'John',
      email: 'john.doe@gmail.com',
      phone: '+35840000000'
    },
    {
      name: 'Jane',
      email: 'jane.doe@gmail.com',
      phone: '+35840000001'
    }
  ];

  render() {
    const items = this.participants.map((participant, index) => {
      return (
        <Participant
          key={index}
          name={participant.name}
          email={participant.email}
          phone={participant.phone}
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
