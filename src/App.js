import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Input from './components/Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: {
        username: '',
        password: '',
        number: 0
      }
    }
  }

  changeHandeler = (e) => {
    let login = Object.assign({}, this.state.login);
    login[e.target.name] = e.target.value;
    this.setState({ login });
  }

  submit = () => {
    alert('form submitted');
  }

  rule = () => {
    let hasError = false;
    if(this.state.login.number && this.state.login.number % 2 > 0) {
      hasError = true;
    }
    return hasError;
  }

  render() {
    return (
      <div className="App">
        <Form submit={this.submit}>
          <Input
            errorMessage="Username is required"
            type="text"
            value={this.state.login.username}
            name="username"
            placeholder="Username"
            changeHandler={this.changeHandeler}
            required />
          <br />
          <Input
            errorMessage="Password is required"
            type="password"
            value={this.state.login.password}
            name="password"
            placeholder="password"
            changeHandler={this.changeHandeler}
            required />
          <Input
            type="text"
            value={this.state.login.number}
            name="number"
            placeholder="Make it even"
            changeHandler={this.changeHandeler}
            custom
            rule={this.rule} />
        </Form>
      </div>
    );
  }
}

export default App;
