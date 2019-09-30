import React, { Component } from 'react';
import ParticipantList from './participant-list/ParticipantList';
import './content.scss';

class Content extends Component {
  render() {
    return (
      <section className="content">
        <ParticipantList />
      </section>
    );
  }
}

export default Content;
