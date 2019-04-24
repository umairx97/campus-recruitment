import React from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";

import Students from "./Students";
import Applications from "./Applications";

class Company extends React.Component {
  state = {
    jobs: [],
    companies: [],
    screen: "students"
  };

  handleScreen = event => {
    if (event.target.name === "applications") {
      this.setState({
        screen: "applications"
      });
    } else {
      this.setState({
        screen: "students"
      });
    }
  };
  render() {
    return (
      <div>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>OR</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="student" />
                  Students
                </Header>
                <Button primary name="students" onClick={this.handleScreen}>
                  View
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="briefcase" />
                  Applications
                </Header>
                <Button primary name="applications" onClick={this.handleScreen}>
                  View
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        {this.state.screen === "students" ? (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
              <Header as="h2" icon color="blue" textAlign="center">
                <Students />
              </Header>
            </Grid.Column>
          </Grid>
        ) : (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
              <Header as="h2" icon color="blue" textAlign="center">
                <Applications />
              </Header>
            </Grid.Column>
          </Grid>
        )}
      </div>
    );
  }
}

export default Company;
