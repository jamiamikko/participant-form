import React, { Component } from 'react';
import './participant-list.scss';

class ParticipantListHeader extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      email: '',
      phone: ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className="participant-list__header">
        <form className="participant-form">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            onChange={this.handleChange}
            className="participant-form__input participant-form__input--name"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail address"
            onChange={this.handleChange}
            className="participant-form__input participant-form__input--email"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            onChange={this.handleChange}
            className="participant-form__input participant-form__input--phone"
          />
          <button className="participant-form__button" onClick={this.submitForm}>
            Add new
          </button>
        </form>
      </div>
    );
  }
}

export default ParticipantListHeader;
