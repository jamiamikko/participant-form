import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './participant.scss';

class Participant extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: this.props.data.name,
      email: this.props.data.email,
      phone: this.props.data.phone,
      id: this.props.data.id,
      editMode: false,
      valid: { name: true, email: true, phone: true },
      touched: { name: false, email: false, phone: false },
      formValid: true
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

  toggleEditMode = () => {
    let changeMode = !this.state.editMode;

    this.setState({ editMode: changeMode });
  };

  resetEditMode = () => {
    this.setState({
      editMode: false,
      valid: { name: true, email: true, phone: true },
      touched: { name: false, email: false, phone: false },
      formValid: true
    });
  };

  saveChanges = () => {
    if (this.state.formValid) {
      let stateCopy = this.state;

      delete stateCopy.valid;
      delete stateCopy.touched;
      delete stateCopy.formValid;
      delete stateCopy.editMode;

      const index = this.props.index;

      this.props.updateParticipant(stateCopy, index);

      this.resetEditMode();
    }
  };

  errorClass = (isTouched, isValid) => {
    if (!isTouched) {
      return '';
    }

    return isValid ? '' : 'error';
  };

  render() {
    const data = this.props.data;

    return (
      <tr className="participant">
        <td className={`participant__info ${!this.state.editMode ? '' : 'hidden'}`}>
          <p className="participant__info-text participant__info-text--name">{data.name}</p>
          <p className="participant__info-text participant__info-text--email">{data.email}</p>
          <p className="participant__info-text participant__info-text--phone">{data.phone}</p>
        </td>
        <td className={`participant__edit ${this.state.editMode ? '' : 'hidden'}`}>
          <form className="participant__edit-form">
            <input
              className={`participant__edit-input participant__edit-input--name ${this.errorClass(
                this.state.touched.name,
                this.state.valid.name
              )}`}
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              className={`participant__edit-input participant__edit-input--email ${this.errorClass(
                this.state.touched.email,
                this.state.valid.email
              )}`}
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              className={`participant__edit-input participant__edit-input--phone ${this.errorClass(
                this.state.touched.phone,
                this.state.valid.phone
              )}`}
              type="tel"
              name="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </form>
        </td>
        <td className="participant__actions">
          <div className={`participant__actions-default ${!this.state.editMode ? '' : 'hidden'}`}>
            <button className="participant__actions-button">
              <EditIcon onClick={this.toggleEditMode} />
            </button>
            <button
              className="participant__actions-button"
              onClick={() => {
                this.props.deleteParticipant(data.id);
              }}>
              <DeleteIcon />
            </button>
          </div>
          <div className={`participant__actions-edit ${this.state.editMode ? '' : 'hidden'}`}>
            <button className="participant__edit-button" onClick={this.toggleEditMode}>
              Cancel
            </button>
            <button
              className="participant__edit-button participant__edit-button--save"
              onClick={this.saveChanges}>
              Save
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default Participant;
