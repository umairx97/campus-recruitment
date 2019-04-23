import React, { Component } from "react";
import Login from "./components/Auth/Login";
import Student from "./components/Dashboard/Student";
import Company from "./components/Dashboard/Company";
import Admin from "./components/Dashboard/Admin";

class App extends Component {
  state = {
    loggedIn: false,
    role: ""
  };

  handleLogin = () => {
    this.setState({
      loggedIn: true
    });
  };

  handleRole = event => {
    this.setState({
      role: event.target.value
    });
  };

  renderDash = role => {
    switch (role) {
      case "student":
        return <Student />;

      case "company":
        return <Company />;
      case "admin":
        return <Admin />;

      default:
        return <Login />;
    }
  };
  render() {
    return (
      <div>
        {/* {this.state.loggedIn && this.state.role === 'student' ? <Student></Student> : <Login> } */}

        {this.state.loggedIn && this.state.role.length > 0 ? (
          this.renderDash(this.state.role)
        ) : (
          <Login
            role={this.state.role}
            handleRole={this.handleRole}
            handleLogin={this.handleLogin}
          />
        )}

      </div>
    );
  }
}

export default App;
