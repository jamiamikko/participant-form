import React, {Component} from 'react';
import ParticipantList from './ParticipantList';
import './content.scss';

class Content extends Component {
  render() {
    return (
      <section class="content">
        <ParticipantList />
      </section>
    );
  }
}

export default Content;
