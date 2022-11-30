import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel style={{position: 'relative'}} className="mb-5">
        <Carousel.Item>
          <img style={{opacity: '0.6'}} className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption style={{position: 'absolute', bottom: '350px'}}>
            <h2 className="text-dark">
              Welcome to the Dentist Office of Dr. Thomas Dooley
            </h2>
            <h5 className="text-dark">
              Feel Great About Your Smile And Your Dentist
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{opacity: '0.6'}} className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption style={{position: 'absolute', bottom: '350px'}}>
            <h2 className="text-dark">Personalized & High-Tech Dentist</h2>
            <h5 className="text-dark">
            He helps patients take control of their dental health and achieve the smiles they’ve always wanted.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{opacity: '0.6'}} className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption style={{position: 'absolute', bottom: '350px'}}>
            <h2 className="text-dark">Better Dental Healthcare.
            Better you.</h2>
            <h5 className="text-dark">
            Helping patients achieve dental health and beautiful smiles is a privilege and responsibility.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
