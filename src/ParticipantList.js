import React, {Component} from 'react';
import ParticipantListHeader from './ParticipantListHeader';
import ParticipantListContent from './ParticipantListContent';
import './participant-list.scss';

class ParticipantList extends Component {
  render() {
    return (
      <div class="participant-list">
        <h2 class="participant-list__heading">List of participants</h2>
        <div>
          <ParticipantListHeader />
          <ParticipantListContent />
        </div>
      </div>
    );
  }
}

export default ParticipantList;
