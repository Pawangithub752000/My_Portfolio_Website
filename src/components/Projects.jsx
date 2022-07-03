import React from "react";
import "./portfolio.css";

import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <>
      <div id="project">
        <h1 className="text text-center h1">
          <u>ABOUT PROJECTS</u>
        </h1>
        <div className="container ">
          <div className="row  mx-auto">
            <Fade left>
              <div className=" col-xl-4 col-md-6  my-4  ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <div class="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/tBM1DJqH5qA"
                    ></iframe>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Clone Of Swiggy Website</h5>
                    <p className="card-text">
                    Here can order food from restaurants as you like.
                    A collaborative project built by 4 Developers within 7 days.
                    

                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Pawangithub752000/Swiggy-Clone.git">
                          <span>Click Me!!</span>
                          <span>code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://pawangithub752000.github.io/Swiggy_Clone_Website/">
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade top>
              <div className="col-xl-4  col-md-6   my-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <div class="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/8hqDuQV7Pws"
                    ></iframe>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Clone Of Bewakoof Website</h5>
                    <p className="card-text">
                   Bewakoof has taken the revolutionary approach to create products in house and sell 
                   directly to customers.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Pawangithub752000/bewakoof.github.io.git">
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://pawangithub752000.github.io/bewakoof.github.io/">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-4 col-md-6 my-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <div class="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/85XyRt30FCw"
                    ></iframe>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Weather Application</h5>
                    <p className="card-text">
                    Displayed live weather report of any location
                    it is a Web based application,
                    Tech Stack: HTML, CSS, JavaScript
                    
                  
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Pawangithub752000/UNIT-5-C2-EVALUATION-Weather-Application.git">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://pawangithub752000.github.io/UNIT-5-C2-EVALUATION-Weather-Application/">
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-xl-4 col-md-6  my-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <div class="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/591Ximl0huQ"
                    ></iframe>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Expense Tracker</h5>
                    <p className="card-text">
                    All user to write & keep all monthly expanse digitally.
                    Tech Stack: HTML, CSS, JavaScript & API(Application Progran Interface)
                   
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Pawangithub752000/Expense_Tracker.git">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://pawangithub752000.github.io/Expense_Tracker//">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="col-xl-4 col-md-6   my-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <div class="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/ZPvz7Bcu1so"
                    ></iframe>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Calculator</h5>
                    <p className="card-text">
                    Basic calculators can do only addition, subtraction, multiplication
                    division,Tech Stack: HTML, CSS & JavaScript
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Pawangithub752000/Calculator.git">
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://pawangithub752000.github.io/Calculator/">
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-4 col-md-6   my-4">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <div class="embed-responsive embed-responsive-4by3">
                  <iframe
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/nE7Xocd5XiM"
                    
                    ></iframe>
                    </div>
                  <div className="card-body">
                    <h5 className="card-title">Pokemon</h5>
                    <p className="card-text">
                    Implement a search bar which can search for a particular pokemon. ‍
                    And Data Fetched Using By Json Server</p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Pawangithub752000/Unit-5-C1-Pokemon.git">
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://pawangithub752000.github.io/Unit-5-C1-Pokemon/">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
