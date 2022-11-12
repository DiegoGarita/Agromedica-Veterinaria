import React from "react";
import prendas from "../assets/img/G1.png";
import maquinaria from "../assets/img/G2.png";
import variados from "../assets/img/G3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Lecheria = () => {
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
    <section className="product" id="lecheria">
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
              <h2>Lechería</h2>
              <br />
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="owl-carousel owl-theme product-slider"
              >
                <div className="item">
                  <a href="/g1">
                    <img src={prendas} alt="" />
                  </a>
                  <h5>Prendas</h5>
                </div>
                <div className="item">
                  <a href="/g2">
                    <img src={maquinaria} alt="" />
                  </a>
                  <h5>Maquinaria lechería</h5>
                </div>
                <div className="item">
                  <a href="/g3">
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
