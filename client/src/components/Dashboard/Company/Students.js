import React from "react";
import { Table, Grid, Header } from "semantic-ui-react";
import axios from "axios";

class Students extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios.get("http://localhost:3002/api/student/").then(res => {
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
              Students
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

          {data.map(item => (
            <Table.Body>
              <Table.Row>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.lastname}</Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    );
  }
}

export default Students;
