import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../images/google.png";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorElement;

  if(loading || sending){
    return <Loading></Loading>
  }

  if(user || googleUser){
    navigate(from, {replace: true});
  }

  if (error || googleError) {
    errorElement = <p className="text-danger">Error: {error?.message} {googleError?.message}</p>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password)
    signInWithEmailAndPassword(email, password);
}

const resetPassword = async() => {
  const email = emailRef.current.value;
  if(email){
    await sendPasswordResetEmail(email);
    toast('Sent email');
  }
  else{
    toast('please enter your email');
  }
}

  return (
    <div className="vh-100 w-50 mx-auto my-5">
      <div className="bg-light p-5 rounded">
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
          </Form.Group>
          <Button className="text-white" variant="info" type="submit">
            Login
          </Button>
        </Form>
        {errorElement}
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
        <p>Forget Password? <button className="btn btn-link text-primary text-decoration-none" onClick={resetPassword}>Reset password</button></p>
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
      <ToastContainer />
    </div>
  );
};

export default Login;
