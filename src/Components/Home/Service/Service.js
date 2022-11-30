import React from "react";

const Service = ({ service }) => {
  const { name, picture, description, price } = service;
  return (
    <div className="col">
    <div className="card border-0 shadow">
      <img src={picture} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h6 className="card-title my-3">${price}</h6>
        <p className="card-text fst-italic">{description}</p>
        <a href="/make-an-appointment" class="btn btn-info text-white">Make an Appointment</a>
      </div>
    </div>
  </div>
  );
};

export default Service;
