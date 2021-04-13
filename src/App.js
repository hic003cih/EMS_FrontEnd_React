import React, { useState } from "react";
import "./App.css";
import { Tech } from "./components/tech/Tech";
import { TablePlant } from "./components/sysPlant/TablePlant";
import { Navbars } from "./components/Navbars";
import Routes from "./components/Routes";

/* const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
}; */

export function App() {
  return (
    <div className="app">
      <Navbars></Navbars>
      <div>
        {/* This project is generated with{" "}
        <b>
          <a href="https://github.com/shpota/goxygen">goxygen</a>
        </b>
        .
        <p />
        The following list of technologies comes from a REST API call to the
        Go-based back end. Find and change the corresponding code in{" "}
        <code>webapp/src/tech/Tech.js</code> and <code>server/web/app.go</code>. */}
        {/*<Tech/>*/}
        {/* <Container className="p-3">
          <Jumbotron>
            <h1 className="header">Welcome To React-Bootstrap</h1>
            <ExampleToast>
              We now have Toasts
              <span role="img" aria-label="tada">
                🎉
              </span>
            </ExampleToast>
          </Jumbotron>
        </Container> */}
      </div>
      {/* <Form>
        <Form.Group controlId="formPlantName">
          <Form.Label>PlantName</Form.Label>
          <Form.Control type="email" placeholder="PlantName" />
          <Form.Text className="text-muted">PlantName</Form.Text>
        </Form.Group>

        <Form.Group controlId="PlantCode">
          <Form.Label>PlantCode</Form.Label>
          <Form.Control type="password" placeholder="PlantCode" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
      {/* <PlantForm></PlantForm> */}
      <Routes />
    </div>
  );
}
