import React, { Component } from 'react';
import Participants from '../participant/Participants';
import './content.scss';

class Content extends Component {
  render() {
    return (
      <section className="content">
        <Participants />
      </section>
    );
  }
}

export default Content;
