import React from "react";
import { Table, Grid, Header } from "semantic-ui-react";
import axios from "axios";

class Applications extends React.Component {
  render() {
    return (
      <div>
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column>
            <Header as="h2" icon color="blue" textAlign="center">
              Applications
            </Header>
          </Grid.Column>
        </Grid>

        <Table color="teal">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Applied To</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {/* {data.map(item => (
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
          ))} */}
        </Table>
      </div>
    );
  }
}

export default Applications;
