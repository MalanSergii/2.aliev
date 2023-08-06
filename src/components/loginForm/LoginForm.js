import { Component } from 'react';

class LoginForm extends Component {
  state = {
    name: '',
    phone: '',
    agreement: false,
  };

  changeAgreement = () => {
    this.setState(prev => ({
      agreement: !prev.agreement,
    }));
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.getDataFromLoginForm(this.state);
    this.setState({
      name: '',
      phone: '',
      agreement: false,
    });
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onInputChange}
          ></input>
          name
        </label>
        <br />
        <label>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.onInputChange}
          ></input>
          phone
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.agreement}
            onChange={this.changeAgreement}
          ></input>
          agreement
        </label>
        <br />
        <button type="submit" disabled={!this.state.agreement}>
          submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
