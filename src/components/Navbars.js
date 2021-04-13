import React, { Component } from "react";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
//import { Nav, NavDropdown, Navbar, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Navbars extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/Home" as={Link} to="/Home" eventKey="/Home">
          Plant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/CreatePlant"
              eventKey="/CreatePlant"
              title="CreatePlant"
            >
              Create
            </Nav.Link>
            <br />
            <Nav.Link
              as={Link}
              to="/TablePlant"
              eventKey="/TablePlant"
              title="TablePlant"
            >
              TablePlant
            </Nav.Link>
            <br />
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );

    //<React.Fragment>
    {
      /* <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
          <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav activeKey={window.location.pathname} variant="pills">
                  <Nav.Item href="/">
                      <Nav.Link as={Link} to="/" eventKey="/home" title="Home">
                          Home
                  </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link as={Link} to="/about" title="About">
                          About
                  </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link as={Link} to="/category" eventKey="category" title="Category">
                          Category
                  </Nav.Link>
                  </Nav.Item>

                  <NavDropdown title="Products" id="nav-dropdown">
                      <NavDropdown.Item>
                          Basic Pricing
                  </NavDropdown.Item>

                      <NavDropdown.Item>
                          Corporate
                  </NavDropdown.Item>
                      <NavDropdown.Divider />

                      <NavDropdown.Item> Enterprise pricing</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Routes /> */
    }
    //</React.Fragment>
  }
}
