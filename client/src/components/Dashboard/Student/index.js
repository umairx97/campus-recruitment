import React from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";
import Jobs from "./Jobs";
import Companies from "./Companies";

class Student extends React.Component {
  state = {
    jobs: [],
    companies: [],
    screen: "jobs"
  };

  handleScreen = event => {
    if (event.target.name === "jobs") {
      this.setState({
        screen: "jobs"
      });
    } else {
      this.setState({
        screen: "companies"
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
            </Grid.Row>
          </Grid>
        </Segment>

        {this.state.screen === "companies" ? (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
              <Header as="h2" icon color="blue" textAlign="center">
                <Companies />
              </Header>
            </Grid.Column>
          </Grid>
        ) : (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
              <Header as="h2" icon color="blue" textAlign="center">
                <Jobs />
              </Header>
            </Grid.Column>
          </Grid>
        )}
      </div>
    );
  }
}

export default Student;
