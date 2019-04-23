import React from "react";
import { Table, Grid, Header } from "semantic-ui-react";
import axios from "axios";

class Jobs extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios.get("http://localhost:3002/api/company/jobs").then(res => {
      if (res.status === 200) {
        const userData = res.data.userData;
        this.setState({
          data: userData
        });
      }
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column>
            <Header as="h2" icon color="blue" textAlign="center">
              Jobs
            </Header>
          </Grid.Column>
        </Grid>

        <Table color="teal">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>CEO</Table.HeaderCell>
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Salary</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {data.map(item => (
            <Table.Body>
              <Table.Row>
                <Table.Cell>{item.ceo}</Table.Cell>
                <Table.Cell>{item.companyName}</Table.Cell>
                <Table.Cell>{item.position}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell>{item.salary}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    );
  }
}

export default Jobs;
