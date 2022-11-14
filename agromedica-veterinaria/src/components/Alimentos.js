import React from "react";
import snacks from "../assets/img/C1.png";
import purina from "../assets/img/C2.jpg";
import diamond from "../assets/img/C3.jpg";
import nutrisource from "../assets/img/C4.jpg";
import balance from "../assets/img/C5.jpg";
import superperro from "../assets/img/C6.jpg";
import dogchow from "../assets/img/C7.jpg";
import variado from "../assets/img/C8.png";
import otros from "../assets/img/C9.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Alimentos = () => {
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
    <section className="product" id="alimentos">
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
            <div className="product-bx-original wow zoomIn">
              <h2>Alimentos</h2>
              <br />
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="owl-carousel owl-theme product-slider"
              >
                <div className="item">
                  <a href="/c1">
                    <img src={snacks} alt="" />
                  </a>
                  <h5>Snacks</h5>
                </div>
                <div className="item">
                  <a href="/c2">
                    <img src={purina} alt="" />
                  </a>
                  <h5>Purina</h5>
                </div>
                <div className="item">
                  <a href="/c3">
                    <img src={diamond} alt="" />
                  </a>
                  <h5>Diamond</h5>
                </div>
                <div className="item">
                  <a href="/c4">
                    <img src={nutrisource} alt="" />
                  </a>
                  <h5>Nutrisource</h5>
                </div>
                <div className="item">
                  <a href="/c5">
                    <img src={balance} alt="" />
                  </a>
                  <h5>Balance</h5>
                </div>
                <div className="item">
                  <a href="/c6">
                    <img src={superperro} alt="" />
                  </a>
                  <h5>Super Perro</h5>
                </div>
                <div className="item">
                  <a href="/c7">
                    <img src={dogchow} alt="" />
                  </a>
                  <h5>Dog Chow</h5>
                </div>
                <div className="item">
                  <a href="/c8">
                    <img src={variado} alt="" />
                  </a>
                  <h5>Variado</h5>
                </div>
                <div className="item">
                  <a href="/c9">
                    <img src={otros} alt="" />
                  </a>
                  <h5>Otras especies</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
