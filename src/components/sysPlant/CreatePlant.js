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

export class CreatePlant extends Component {
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
      plant_desc: "",
      plant_remark: ""
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
    return (
      <Container>
        <div style={{ marginTop: 50 }}>
          <Row className="justify-content-center">
            <Col className="col-md-12">
              <h1 className="display-4 text-center">Create</h1>
              <Form noValidate onSubmit={(e) => this.create(e)}>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>plant_name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      id="plant_name"
                      placeholder="plant_name"
                      value={this.state.plant_name}
                      onChange={(e) =>
                        this.handleChange({ plant_name: e.target.value })
                      }
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>plant_code</Form.Label>
                    <InputGroup hasValidation>
                      {/* <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>
                      </InputGroup.Prepend> */}
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
                  <Form.Group as={Col} md="12" controlId="validationCustom03">
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
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Plant_Remark</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Plant_Remark"
                      required
                      id="Plant_Remark"
                      value={this.state.plant_remark}
                      onChange={(e) =>
                        this.handleChange({ plant_remark: e.target.value })
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
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
        </div>
      </Container>
    );
  }
}
