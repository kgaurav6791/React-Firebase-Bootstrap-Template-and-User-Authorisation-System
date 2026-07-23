import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/useUserAuth";
import { Container, Row, Col } from "react-bootstrap";

const CONFIG_ERROR_CODES = new Set([
  "auth/api-key-not-valid",
  "auth/invalid-api-key",
  "auth/invalid-auth-domain",
  "auth/unauthorized-domain",
]);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      if (CONFIG_ERROR_CODES.has(err.code)) {
        navigate("/firebase-config-error", {
          state: {
            firebaseConfigError: {
              type: "invalid",
              message: err.message,
            },
          },
        });
        return;
      }

      setError(err.message);
    }
  };

  return (
    <>
      <Container style={{ width: "400px", marginTop: "8%" }}>
        <Row>
          <Col>
            <div className="p-4 box">
              <h2 className="mb-3 text-center">Brinks Global Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="Submit">
                    Log In
                  </Button>
                </div>
              </Form>
              <hr />
              <div>
                {/* <GoogleButton
                  className="g-btn"
                  type="dark"
                  onClick={handleGoogleSignIn}
                /> */}
              </div>
            </div>
            {/* <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
