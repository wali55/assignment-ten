import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import google from "../../images/google.png";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  const emailRef = useRef("");
  const passwordRef = useRef("");

  return (
    <div className="vh-100 w-50 mx-auto my-5">
      <div className="bg-light p-5 rounded">
        <h2 className="text-center mb-4">Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="text-white" variant="info" type="submit">
            Login
          </Button>
        </Form>
        <p className="mt-3">
          New to Genius Car?{" "}
          <Link
            to="/register"
            className="text-primary text-decoration-none"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>
        <div className="d-flex align-items-center">
          <div style={{ height: "2px" }} className="bg-info w-50"></div>
          <p className="mt-2 px-2">or</p>
          <div style={{ height: "2px" }} className="bg-info w-50"></div>
        </div>
        <div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-light border border-2 w-50 d-block mx-auto my-2"
          >
            <img style={{ width: "30px" }} src={google} alt="" />
            <span className="px-2">Google Sign In</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
