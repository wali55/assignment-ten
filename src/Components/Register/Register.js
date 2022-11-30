import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/google.png';
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from '../Loading/Loading';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login");
      };

    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleRegister = async(event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;await createUserWithEmailAndPassword(email, password);
        navigate("/home");
    };

    if(loading){
        return <Loading></Loading>
    }
    
    return (
        <div className="vh-100 w-50 mx-auto my-5">
      <div className="bg-light p-5 rounded">
        <h2 className="text-center mb-4">Register</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control ref={nameRef} type="text" placeholder="Enter name" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
          </Form.Group>
          <Button className="text-white" variant="info" type="submit">
            Register
          </Button>
        </Form>
        <p className="mt-3"> Already have an account? <Link to="/login" className="text-primary text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
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

export default Register;