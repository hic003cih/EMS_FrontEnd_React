import React, { Component } from "react";
import axios from "axios";
import "./Plant.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export class PlantForm extends Component {
  /* state = {
        technologies: [],
        friends: [],
        plant_name: '',
        id: '',
        plant_code: '',
        plant_desc:''
    };*/
  constructor(props) {
    super(props);
    this.state = {
      plant_name: "",
      plant_code: "",
      plant_desc: ""
    };
    this.create = this.create.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    /*axios.post(`${process.env.REACT_APP_API_URL}/api/Proct`)
            .then(resp => this.setState({
                technologies: resp.data
            }));*/
  }
  create(e) {
    // add entity - POST
    e.preventDefault();
    console.log(this.state.plant_name);
    // creates entity
    fetch("http://localhost:8080/api/Proct", {
      method: "POST",
      headers: {
        //"x-rapidapi-host": "fairestdb.p.rapidapi.com",
        // "x-rapidapi-key": API_KEY,
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(changeObject) {
    this.setState(changeObject);
  }

  render() {
    /*const head = this.state.technologies.map((technology, key) =>

            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
            {/!*<li key={i}>
                <b>{technology.id}</b>: {technology.plant_name}
            </li>*!/}
            </thead>
        );*/
    /*const body = this.state.technologies.map((technology, i) =>

            <tbody>
            <tr>
                <td>{technology.id}</td>
                <td>{technology.plant_name}</td>
                <td>{technology.plant_code}</td>
                <td>{technology.plant_desc}</td>
                <td>{technology.plant_remark}</td>
            </tr>
            </tbody>
        );*/
    /*<Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </Table>*/
    return (
      <Container>
        <Row className="justify-content-center">
          <Col className="col-md-12">
            <h1 className="display-4 text-center">Make An API Call in React</h1>
            {/*<form className="d-flex flex-column">
                            <legend className="text-center">Add-Update-Delete Friend</legend>
                            <label htmlFor="name">
                                Friend Name:
                                <input
                                    name="name"
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={(e) => this.handleChange({ name: e.target.value })}
                                    required
                                />
                            </label>
                            <label htmlFor="notes">
                                Friend notes:
                                <input
                                    name="notes"
                                    id="notes"
                                    type="test"
                                    className="form-control"
                                    value={this.state.notes}
                                    onChange={(e) => this.handleChange({ notes: e.target.value })}
                                    required
                                />
                            </label>
                            <label htmlFor="id">
                                Friend ID:
                                <input
                                    name="id"
                                    id="id"
                                    type="text"
                                    className="form-control"
                                    value={this.state.id}
                                    onChange={(e) => this.handleChange({ id: e.target.value })}
                                />
                            </label>
                            <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                                Add
                            </button>
                            <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
                                Update
                            </button>
                            <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
                                Delete
                            </button>
                        </form>*/}
            {/* <Form noValidate validated={validated} onSubmit={(e) => this.create(e)}>*/}
            <Form noValidate onSubmit={(e) => this.create(e)}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>plant_name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="plant_name"
                    placeholder="plant_name"
                    defaultValue="Mark"
                    value={this.state.plant_name}
                    onChange={(e) =>
                      this.handleChange({ plant_name: e.target.value })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue="Otto"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>plant_code</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      placeholder="plant_code"
                      id="plant_code"
                      aria-describedby="inputGroupPrepend"
                      value={this.state.plant_code}
                      onChange={(e) =>
                        this.handleChange({ plant_code: e.target.value })
                      }
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Plant_desc</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Plant_desc"
                    required
                    id="Plant_desc"
                    value={this.state.plant_desc}
                    onChange={(e) =>
                      this.handleChange({ plant_desc: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="State" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
