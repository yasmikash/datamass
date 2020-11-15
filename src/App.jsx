import React, { useState } from "react";

import { Container, Jumbotron, Button, Form } from "react-bootstrap";
import { nanoid } from "nanoid";

import AppNavBar from "./components/AppNavBar";
import SocialShare from "./components/SocialShare";

function App({ firebase }) {
  var uniqueId = nanoid();
  var url = `http://datamass.tech/#/?r=${uniqueId}`;

  var [validated, setValidated] = useState(false);
  var [requested, setRequested] = useState(false);

  var handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
      var elemets = event.target.elements;

      var data = {
        name: elemets.fullName.value,
        email: elemets.email.value,
        gender: elemets.gender.value,
        phone: elemets.mobile.value,
        data: elemets.data.value,
      };

      firebase
        .database()
        .ref(`/users/${uniqueId}`)
        .set(data)
        .then((resp) => {
          setRequested(true);
        });
    }

    setValidated(true);
  };

  return (
    <>
      <header>
        <AppNavBar />
      </header>
      <Container style={style.banner}>
        <Jumbotron>
          <p>
            DataMass is providing FREE data for a limited number of people that
            are signing up on DataMass platform, as our initial project
            campaing. This is a major step we are going to make in the
            technology industry and we are so thrilled to launch our services
            soon on the internet!
          </p>
          <p>
            <Button variant="primary">DataMass Hive Project</Button>
          </p>
        </Jumbotron>
      </Container>
      <Container>
        <h3>
          To receive your FREE data to your Dialog, Mobitel, AirTel, or Hutch
          mobile, please fill the form below. (You will also be creating a
          DataMass account)
        </h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              id="fullName"
              type="text"
              placeholder="Enter your full name here"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Enter your full email here"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" id="gender" required>
              <option value="">Choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Your Mobile Number</Form.Label>
            <Form.Control
              id="mobile"
              type="number"
              placeholder="077xxxxxxx"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Data Amount You Wish to Receive</Form.Label>
            <Form.Control as="select" id="data" required>
              <option value="1">1 GB</option>
              <option value="5">5 GB</option>
              <option value="10">10 GB</option>
              <option value="20">20 GB</option>
              <option value="50">50 GB</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Get Free Data
          </Button>
        </Form>
      </Container>
      {requested && (
        <Container>
          <p>
            You will receive <b>20%</b> as a refferal bonus when your users
            claim with this address:
            <code>{url}</code>
          </p>
          <p>Share your refferal link on social medias:</p>
          <SocialShare url={url} style={style.socialIconsBox} />
        </Container>
      )}
      <div
        style={{
          margin: 50,
        }}
      ></div>
    </>
  );
}

var style = {
  banner: {
    padding: 10,
  },
  socialIconsBox: {
    padding: 10,
  },
};

export default App;
