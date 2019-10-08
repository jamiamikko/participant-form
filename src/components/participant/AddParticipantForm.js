import React, { Component } from 'react';
import { Random, uuid4 } from 'random-js';
import './add-participant.scss';

class AddParticipantForm extends Component {
  constructor(props) {
    super(props);

    this.random = new Random();

    this.initialState = {
      name: '',
      email: '',
      phone: '',
      id: '',
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
      const participantId = uuid4(this.random.engine);

      this.setState({ id: participantId }, () => {
        let stateCopy = this.state;

        delete stateCopy.valid;
        delete stateCopy.touched;
        delete stateCopy.formValid;

        this.props.handleSubmit(stateCopy);
        this.setState(this.initialState);
      });
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
      <div className="add-participant">
        <form className="add-participant__form">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            onChange={this.handleChange}
            value={this.state.name}
            className={`add-participant__input ${this.errorClass(
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
            className={`add-participant__input ${this.errorClass(
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
            className={`add-participant__input ${this.errorClass(
              this.state.touched.phone,
              this.state.valid.phone
            )}`}
          />
          <button className="add-participant__button" onClick={this.submitForm}>
            Add new
          </button>
        </form>
      </div>
    );
  }
}

export default AddParticipantForm;
