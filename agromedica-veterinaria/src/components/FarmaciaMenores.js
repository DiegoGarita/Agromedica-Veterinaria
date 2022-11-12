import React from "react";
import desparasitantes from "../assets/img/R4-F1.png";
import shampoo from "../assets/img/F2.png";
import vitaminas from "../assets/img/R1-F3.png";
import antibioticos from "../assets/img/R6-F4.png";
import antiinflamatorios from "../assets/img/R2-F5.png";
import desinfectantes from "../assets/img/F6.png";
import variados from "../assets/img/R7-F7.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const FarmaciaMenores = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="product" id="farmacia">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product-bx wow zoomIn">
              <h2>Farmacia para especies menores</h2>
              <br />
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="owl-carousel owl-theme product-slider"
              >
                <div className="item">
                  <a href="/f1">
                    <img src={desparasitantes} alt="" />
                  </a>
                  <h5>Desparasitantes</h5>
                </div>
                <div className="item">
                  <a href="/f2">
                    <img src={shampoo} alt="" />
                  </a>
                  <h5>Shampoo y limpieza</h5>
                </div>
                <div className="item">
                  <a href="/f3">
                    <img src={vitaminas} alt="" />
                  </a>
                  <h5>Vitaminas</h5>
                </div>
                <div className="item">
                  <a href="/f4">
                    <img src={antibioticos} alt="" />
                  </a>
                  <h5>Antibioticos</h5>
                </div>
                <div className="item">
                  <a href="/f5">
                    <img src={antiinflamatorios} alt="" />
                  </a>
                  <h5>Antiinflamatorios</h5>
                </div>
                <div className="item">
                  <a href="/f6">
                    <img src={desinfectantes} alt="" />
                  </a>
                  <h5>Desinfectantes</h5>
                </div>
                <div className="item">
                  <a href="/f7">
                    <img src={variados} alt="" />
                  </a>
                  <h5>Variados</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
