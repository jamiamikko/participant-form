import React, { Component } from 'react';
import './participant-list.scss';

class ParticipantListForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      email: '',
      phone: '',
      valid: { name: false, email: false, phone: false },
      touched: { name: false, email: false, phone: false },
      formValid: false
    };

    this.state = this.initialState;
  }

  validateForm = () => {
    this.setState({
      formValid: this.state.valid.name && this.state.valid.email && this.state.valid.phone
    });
  };

  validateField = (fieldName, value) => {
    let nameValid = this.state.valid.name;
    let emailValid = this.state.valid.email;
    let phoneValid = this.state.valid.phone;

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

    this.setState(
      { valid: { name: nameValid, email: emailValid, phone: phoneValid } },
      this.validateForm
    );
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(
      {
        [name]: value,
        touched: { ...this.state.touched, [name]: true }
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  submitForm = event => {
    event.preventDefault();

    if (this.state.formValid) {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }
  };

  errorClass = (isTouched, isValid) => {
    if (!isTouched) {
      return '';
    }

    return isValid ? '' : 'error';
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
            className={`participant-form__input participant-form__input--name ${this.errorClass(
              this.state.touched.name,
              this.state.valid.name
            )}`}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail address"
            onChange={this.handleChange}
            value={this.state.email}
            className={`participant-form__input participant-form__input--email ${this.errorClass(
              this.state.touched.email,
              this.state.valid.email
            )}`}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            onChange={this.handleChange}
            value={this.state.phone}
            className={`participant-form__input participant-form__input--phone ${this.errorClass(
              this.state.touched.phone,
              this.state.valid.phone
            )}`}
          />
          <button className="participant-form__button" onClick={this.submitForm}>
            Add new
          </button>
        </form>
      </div>
    );
  }
}

export default ParticipantListForm;
