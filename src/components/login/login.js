import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginDashboard = () => {
  const loginContainerStyle = {
    width: '300px',
    margin: 'auto',
    marginTop: '100px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const loginButtonStyle = {
    backgroundColor: 'purple',
    color: 'orange',
    border: 'none',
    marginRight: '10px', // Aggiunto per distanziare i pulsanti
  };

  return (
    <Container>
      <Row>
        <Col>
          <div style={loginContainerStyle}>
            <h2>Login</h2>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Email or Nickname" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button style={loginButtonStyle} block>
                Log-in
              </Button>
              <Button variant="secondary" style={loginButtonStyle} block>
                Register
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginDashboard;
