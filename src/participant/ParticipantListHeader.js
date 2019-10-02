import React, { Component } from 'react';
import './participant-list.scss';

class ParticipantListHeader extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      email: '',
      phone: '',
      nameValid: false,
      emailValid: false,
      phoneValid: false
    };

    this.state = this.initialState;
  }

  validateField = (fieldName, value) => {
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;

    switch (fieldName) {
      case 'name':
        nameValid = value !== '' ? true : false;
        break;
      case 'email':
        emailValid = value !== '' ? true : false;
        break;
      case 'phone':
        phoneValid = value !== '' ? true : false;
        break;
      default:
        break;
    }

    this.setState({ nameValid: nameValid, emailValid: emailValid, phoneValid: phoneValid });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  submitForm = event => {
    event.preventDefault();

    if (this.state.nameValid && this.state.emailValid && this.state.phone) {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }
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
            value={this.state.name}
            className="participant-form__input participant-form__input--name"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail address"
            onChange={this.handleChange}
            value={this.state.email}
            className="participant-form__input participant-form__input--email"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            onChange={this.handleChange}
            value={this.state.phone}
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
