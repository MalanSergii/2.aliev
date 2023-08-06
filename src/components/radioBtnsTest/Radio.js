import { Component } from 'react';

class Radio extends Component {
  state = {
    age: '',
  };

  setAge = e => {
    this.setState({
      age: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <p>your age please</p>
        <label>
          <input onChange={this.setAge} type="radio" name="user-age" value="0-16"></input>
          0-16
        </label>
        <br />
        <label>
          <input onChange={this.setAge} type="radio" name="user-age" value="17-27"></input>
          17-27
        </label>
        <br />
        <label>
          <input onChange={this.setAge} type="radio" name="user-age" value="28-50"></input>
          28-50
        </label>
      </form>
    );
  }
}

export default Radio;
