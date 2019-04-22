import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  render() {
    return <div>Dashboard Page</div>;
  }
}

class App extends React.Component {
  state = {
    loggedIn: false
  };

  handleLogin = () => {
    this.setState({
      loggedIn: true
    });
  };
  render() {
    return (
      <div>
        {this.state.loggedIn ? (
          <Dashboard />
        ) : (
          <Login handleLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

class Login extends Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    InLogged: false
  };

  isFormEmpty = () => {
    const { name, email, password, lastname } = this.state;
    return (
      name.length && lastname.length && email.length && password.length > 0
    );
  };

  saveData = () => {
    axios
      .post("http://localhost:3002/api/users/register", {
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        this.props.handleLogin();
      })
      .catch(error => {
        console.log(error);
      });
  };

  formSubmit = event => {
    event.preventDefault();

    if (this.isFormEmpty()) {
      this.saveData();
    } else {
      console.log("your form is empty");
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <label>name</label>
          <br />
          <input
            type="text"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
          />
          <br />

          <label>lastname</label>
          <br />
          <input
            type="text"
            onChange={this.handleChange}
            name="lastname"
            value={this.state.lastname}
          />

          <br />

          <label>email</label>
          <br />
          <input
            type="text"
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
          />

          <br />
          <label>password</label>
          <br />
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
          />
          <br />
          <button>Click Me</button>
        </form>
      </div>
    );
  }
}

export default App;
