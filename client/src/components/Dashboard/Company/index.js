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
import Post from "./Post";

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
    } else if (event.target.name === "students") {
      this.setState({
        screen: "students"
      });
    } else {
      this.setState({
        screen: "post"
      });
    }
  };

  renderScreen = screen => {
    switch (screen) {
      case "students":
        return (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
              <Header as="h2" icon color="blue" textAlign="center">
                <Students role={this.props.role} />
              </Header>
            </Grid.Column>
          </Grid>
        );

      case "applications":
        return (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
              <Header as="h2" icon color="blue" textAlign="center">
                <Applications />
              </Header>
            </Grid.Column>
          </Grid>
        );

      case "post":
        return (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
              <Post role={this.props.role} />
            </Grid.Column>
          </Grid>
        );

      default:
        this.setState({ screen: "students" });
    }
  };
  render() {
    console.log(this.props.role);
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

        {this.state.screen === "post" ? null : (
          <Button
            color="green"
            animated
            name="post"
            onClick={this.handleScreen}
          >
            <Button.Content visible>Post A job</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        )}

        {this.renderScreen(this.state.screen)}
      </div>
    );
  }
}

export default Company;
