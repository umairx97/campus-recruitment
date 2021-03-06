import React from "react";
import { Button, Grid, Header, Icon, Segment } from "semantic-ui-react";

import Companies from "../Student/Companies";
import Jobs from "../Student/Jobs";
import Students from "../Company/Students";

class Admin extends React.Component {
  state = {
    jobs: [],
    companies: [],
    screen: "students"
  };

  handleScreen = event => {
    switch (event.target.name) {
      case "students":
        this.setState({ screen: "students" });
        return;
      case "companies":
        this.setState({ screen: "companies" });
        return;
      case "jobs":
        this.setState({ screen: "jobs" });
        return;
      default:
        this.setState({ screen: "students" });
        return;
    }
  };

  renderScreen = screen => {
    switch (screen) {
      case "companies":
        return (
          <div>
            <Grid textAlign="center" verticalAlign="middle" className="app">
              <Grid.Column>
                  <Companies role = {this.props.role}/>
              </Grid.Column>
            </Grid>
          </div>
        );

      case "jobs":
        return (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
                <Jobs role = {this.props.role} />
            </Grid.Column>
          </Grid>
        );

      case "students":
        return (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
                <Students  role = {this.props.role}/>
            </Grid.Column>
          </Grid>
        );

      default:
        return "Please select";
    }
  };

  render() {

    return (
      <div>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="copyright outline" />
                  Companies
                </Header>
                <Button primary name="companies" onClick={this.handleScreen}>
                  View
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="briefcase" />
                  Jobs
                </Header>
                <Button primary name="jobs" onClick={this.handleScreen}>
                  View
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="briefcase" />
                  Students
                </Header>
                <Button primary name="students" onClick={this.handleScreen}>
                  View
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        {this.renderScreen(this.state.screen)}
      </div>
    );
  }
}

export default Admin;
