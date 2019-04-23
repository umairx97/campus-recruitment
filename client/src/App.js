import React, { Component } from "react";
import Login from "./components/Auth/Login";

import StudentDashboard from "./components/Dashboard/Student/index";
import CompanyDashboard from './components/Dashboard/Company/index';

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
        return <StudentDashboard />;

      case "company":
        return <CompanyDashboard />;

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
