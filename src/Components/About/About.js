import React from "react";
import wali from "../../images/wali.png";

const About = () => {
  return (
    <div className="vh-100">
      <h2 className="text-center my-5">About</h2>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-lg-6">
            <h3>My Goals</h3>
            <ul className="list-group mt-4">
              <li className="list-group-item">Firstly I want to finish this course.</li>
              <li className="list-group-item">
                Then I want to practice the part I am still not very
                comfortable.
              </li>
              <li className="list-group-item">
                Then I want to do the assignments one more time for practice.
              </li>
              <li className="list-group-item">I want to build some clone websites if possible.</li>
              <li className="list-group-item">Meanwhile I want to read the documentations.</li>
              <li className="list-group-item">I want to prepare for interview and build my portfolio.</li>
              <li className="list-group-item">Lastly, apply for interview.</li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <img className="d-block mx-auto" src={wali} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
