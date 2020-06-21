import { Card, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Login = ({ setIsAuthenticated }) => {

    const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
    setIsAuthenticated(true);
    
  };

  if (redirect) {
      console.log('hitting here')
      return (<Redirect to='/' />);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Card style={{width:'20rem', margin:'auto', marginTop:'2rem'}}>
        <Card.Body>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" type="submit">Login</Button>
        </Card.Footer>
      </Card>
    </Form>
  );
};

export default Login;
