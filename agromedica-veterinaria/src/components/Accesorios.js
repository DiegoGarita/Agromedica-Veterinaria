import React from "react";
import correas from "../assets/img/A1.png";
import juguetes from "../assets/img/A2.png";
import cepillos from "../assets/img/A3.png";
import tazas from "../assets/img/A4.png";
import otros from "../assets/img/A5.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Accesorios = () => {
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
    <section className="product" id="accesorios">
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
            <div className="product-bx-original wow zoomIn">
              <h2>Accesorios</h2>
              <br />
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="owl-carousel owl-theme product-slider"
              >
                <div className="item">
                  <a href="/a1">
                    <img src={correas} alt="" />
                  </a>
                  <h5>Correas, pecheras y más</h5>
                </div>
                <div className="item">
                  <a href="/a2">
                    <img src={juguetes} alt="" />
                  </a>
                  <h5>Juguetes</h5>
                </div>
                <div className="item">
                  <a href="/a3">
                    <img src={cepillos} alt="" />
                  </a>
                  <h5>Cepillos y cuidados</h5>
                </div>
                <div className="item">
                  <a href="/a4">
                    <img src={tazas} alt="" />
                  </a>
                  <h5>Comederos y bebederos</h5>
                </div>
                <div className="item">
                  <a href="/a5">
                    <img src={otros} alt="" />
                  </a>
                  <h5>Otros</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};
