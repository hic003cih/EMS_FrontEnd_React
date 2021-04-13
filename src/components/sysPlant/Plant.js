import React, { Component } from "react";
import axios from "axios";
import "./Plant.css";
import Table from "react-bootstrap/Table";

export class Plant extends Component {
  state = {
    technologies: []
  };

  /* componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/Proct`).then((resp) =>
      this.setState({
        technologies: resp.data
      })
    );
  }
 */
  render() {
    const body = this.state.technologies.map(function (technology, i) {
      return (
        <tbody>
          <tr>
            <td>{technology.id}</td>
            <td>{technology.plant_name}</td>
            <td>{technology.plant_code}</td>
            <td>{technology.plant_desc}</td>
            <td>{technology.plant_remark}</td>
          </tr>
        </tbody>
      );
    });
    return (
      <ul className="technologies">
        <Table striped bordered hover>
          <thead>
            <th>#</th>
            <th>Name</th>
            <th>Code</th>
            <th>Desc</th>
            <th>Remark</th>
          </thead>
          {body}
        </Table>
      </ul>
    );
  }
}
