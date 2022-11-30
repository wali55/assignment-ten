import React from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MakeAnAppointment = () => {
    const makeAppointment = () => {
        toast('Thanks for your appointment.');
    }
  return (
    <div className="vh-100 w-50 mx-auto my-5">
      <div className="bg-light p-5 rounded">
        <h2 className="text-center mb-4">Make an Appointment</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Your Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone number"
              required
            />
          </Form.Group>
          <Button onClick={makeAppointment} className="text-white" variant="info" type="submit">
            Make an Appointment
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MakeAnAppointment;
