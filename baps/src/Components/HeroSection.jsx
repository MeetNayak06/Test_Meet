import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <section className="d-flex hero align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>BAPS SWAMINARAYAN</h1>
              <p>
                BAPS Swaminarayan Sanstha is a spiritual, volunteer-driven
                fellowship dedicated to improving society through individual
                growth by fostering the Hindu values of faith, service and
                global harmony.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Button>
                  <NavLink to="/About" className="btn-get-started scrollto">
                    Get Started
                  </NavLink>
                </Button>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="./images/BAPSimg.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="clients section-bg bg-light">
        <div className="container">
          <div className="section-title text-center">
            <h2>Founder and Successors</h2>
          </div>
          <div className="row mt-4" data-aos="zoom-in">
            <div className="col-lg-1 col-md-4 col-6 d-flex align-items-center justify-content-center"></div>

            <div className="col-lg-1 col-md-4 col-6 d-flex align-items-center justify-content-center"></div>

            <div className="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col Photo-1 text-center">
                  <img
                    src="./images/Thumb_Home_FS_Bhagwan_swaminarayan.png"
                    className="img-fluid "
                    alt=""
                  />
                  <p>BHAGWAN SWAMINARAYAN</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col text-center">
                  <img
                    src="./images/Thumb_Home_FS_gunatitanand_swami.png "
                    className="img-fluid"
                    alt=""
                  />
                   <p>GUNATITANAND SWAMI</p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"></div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"></div>
          </div>

          <div className="row" data-aos="zoom-in">
            <div className="col-lg-1 col-md-4 col-6 d-flex align-items-center justify-content-center"></div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="./images/Thumb_Home_FS_bhagataji_maharaj.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="./images/Thumb_Home_FS_Shastriji_Maharaj.png "
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="./images/Thumb_Home_FS_yogiji_maharaj.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="./images/Thumb_Home_FS_pramukhswamimaharaj.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="./images/Thumb_Home_FS_mahantswamimaharaj.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-1 col-md-4 col-6 d-flex align-items-center justify-content-center"></div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center mt-5">
            <h2>About BAPS</h2>
          </div>

          <div className="row content mt-3">
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Duis aute irure dolor
                  in reprehenderit in voluptate velit
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <Button>
                <NavLink to="/About" className="btn-learn-more">
                  Learn More
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="hero-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 mt-5">
              <div className="section-Hero-data">
                <p className="hero-title">Jay Swaminarayan</p>
                <h1 className="hero-heading">BAPS Swaminarayan</h1>
                <p className="hero-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias incidunt rem consectetur maiores veritatis numquam
                  corrupti voluptates sed, quia repellendus expedita nihil,
                  quibusdam impedit neque quod molestiae alias ullam doloremque!
                </p>
                <Button className="btn more-btn">
                  <NavLink to="/Contact">More..</NavLink>
                </Button>
              </div>
            </div>

            <div className="col-lg-6 text-center mt-5">
              <div className="section-Hero-img">
                <picture>
                  <img src="./images/BAPSimg.png" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .section-title {
    color: red;
  }
  h1 {
    color: red;
  }
  // .container-fluid {
  //   background-color: rgba(255, 99, 71, 0.5);
  //   height: 80vh;
  // }
  // picture img {
  //   width: 50%;
  // }
  // .section-Hero-data {
  //   align-items: center;
  // }
  // .hero-title {
  //   text-transform: uppercase;
  //   font-weight: 800;
  //   font-size: 20px;
  // }
  // .card-section {
  //   height: auto;
  //   margin-top: 10%;
  // }
  --------------------------------------------------------------*/ .hero {
    width: 100%;
    height: 80vh;
    background: #37517e;
  }

  .hero .container {
    padding-top: 72px;
  }

  .hero h1 {
    margin: 0 0 10px 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
  }

  .hero h2 {
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 50px;
    font-size: 24px;
  }

  .hero .btn-get-started {
    font-family: "Jost", sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 28px 11px 28px;
    border-radius: 50px;
    transition: 0.5s;
    margin: 10px 0 0 0;
    color: #fff;
    background: #47b2e4;
  }

  .hero .btn-get-started:hover {
    background: #209dd8;
  }

  .hero .btn-watch-video {
    font-size: 16px;
    display: flex;
    align-items: center;
    transition: 0.5s;
    margin: 10px 0 0 25px;
    color: #fff;
    line-height: 1;
  }

  .hero .btn-watch-video i {
    line-height: 0;
    color: #fff;
    font-size: 32px;
    transition: 0.3s;
    margin-right: 8px;
  }

  .hero .btn-watch-video:hover i {
    color: #47b2e4;
  }

  .hero .animated {
    animation: up-down 2s ease-in-out infinite alternate-reverse both;
  }

  @media (max-width: 991px) {
    .hero {
      height: 100vh;
      text-align: center;
    }

    .hero .animated {
      animation: none;
    }

    .hero .hero-img {
      text-align: center;
    }

    .hero .hero-img img {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 28px;
      line-height: 36px;
    }

    .hero h2 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 30px;
    }

    .hero .hero-img img {
      width: 70%;
    }
  }

  @media (max-width: 575px) {
    .hero .hero-img img {
      width: 80%;
    }

    .hero .btn-get-started {
      font-size: 16px;
      padding: 10px 24px 11px 24px;
    }
  }

  @keyframes up-down {
    0% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(-10px);
    }
  }
  .about .content h3 {
    font-weight: 600;
    font-size: 26px;
  }

  .about .content ul {
    list-style: none;
    padding: 0;
  }

  .about .content ul li {
    padding-left: 28px;
    position: relative;
  }

  .about .content ul li + li {
    margin-top: 10px;
  }

  .about .content ul i {
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 20px;
    color: #47b2e4;
    line-height: 1;
  }

  .about .content p:last-child {
    margin-bottom: 0;
  }
  #clients{
    height:80%;
  }

  .about .content .btn-learn-more {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 12px 32px;
    border-radius: 4px;
    transition: 0.3s;
    line-height: 1;
    color: #47b2e4;
    animation-delay: 0.8s;
    margin-top: 6px;
    border: 2px solid #47b2e4;
  }

  .about .content .btn-learn-more:hover {
    background: #47b2e4;
    color: #fff;
    text-decoration: none;
  }
  .Photo-1 p {
    font-size: 12px;
  }
`;
export default HeroSection;
