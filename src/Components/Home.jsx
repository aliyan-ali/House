import React from "react";
import "./Component.css";

function Home() {
  return (
    <>
      <div className="video-container">
        <video
          src="/Assets/Video/handyman.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="container py-5">
        <div className="services-title">
          <h1 className="text-center ">Our Services</h1>
        </div>
        <div className="py-5 d-flex gap-5 flex-wrap justify-content-between allign-items-center">
          <div
            className="card card-box"
            style={{
              width: "20rem",
              cursor: "pointer",
            }}
          >
            <img
              src="/Assets/1.jpg"
              class="card-img-top card-img"
              alt="..."
              style={{ height: "20rem" }}
            />
            <div className="card-body">
              <h3 className="card-title">Carpenter</h3>
              <p className="card-text">
                Find skilled carpenters for furniture making, repairs, and
                installations.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div
            className="card card-box"
            style={{
              width: "20rem",
              cursor: "pointer",
            }}
          >
            <img
              src="/Assets/2.jpg"
              class="card-img-top card-img"
              alt="..."
              style={{ height: "20rem" }}
            />
            <div className="card-body">
              <h3 className="card-title">Mechanic</h3>
              <p className="card-text">
                Get professional mechanics for vehicle repairs, maintenance, and
                diagnostics.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div
            className="card card-box"
            style={{
              width: "20rem",
              cursor: "pointer",
            }}
          >
            <img
              src="/Assets/3.jpg"
              class="card-img-top card-img"
              alt="..."
              style={{ height: "20rem" }}
            />
            <div className="card-body">
              <h3 className="card-title">Electrition</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div
            className="card card-box"
            style={{
              width: "20rem",
              cursor: "pointer",
            }}
          >
            <img
              src="/Assets/4.jpg"
              class="card-img-top card-img"
              alt="..."
              style={{ height: "20rem" }}
            />
            <div className="card-body">
              <h3 className="card-title">Painter</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div
            className="card card-box"
            style={{
              width: "20rem",
              cursor: "pointer",
            }}
          >
            <img
              src="/Assets/5.jpg"
              class="card-img-top card-img"
              alt="..."
              style={{ height: "20rem" }}
            />
            <div className="card-body">
              <h3 className="card-title">Handyman</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div
            className="card card-box"
            style={{
              width: "20rem",
              cursor: "pointer",
            }}
          >
            <img
              src="/Assets/6.jpg"
              class="card-img-top card-img"
              alt="..."
              style={{ height: "20rem" }}
            />
            <div className="card-body">
              <h3 className="card-title">Sweeper</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
