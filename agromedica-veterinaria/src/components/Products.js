import React from "react";
import accesorios from "../assets/img/accesorios-icon.png";
import alimentos from "../assets/img/alimentos-icon.png";
import farmaciaMenores from "../assets/img/farmacia-icon.png";
import farmaciaMayores from "../assets/img/farmacia2-icon.png";
import lecheria from "../assets/img/lecheria-icon.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Products = () => {
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
    <section className="product" id="productos">
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
              <h2>Productos</h2>
              <br />
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="owl-carousel owl-theme product-slider"
              >
                <div className="item">
                  <a href="/accesorios">
                    <img src={accesorios} alt="" />
                  </a>
                  <h5>Accesorios</h5>
                </div>
                <div className="item">
                  <a href="/alimentos">
                    <img src={alimentos} alt="" />
                  </a>
                  <h5>Alimentos</h5>
                </div>
                <div className="item">
                  <a href="/farmaciamayores">
                    <img src={farmaciaMayores} alt="" />
                  </a>
                  <h5>Farmacia para especies mayores</h5>
                </div>
                <div className="item">
                  <a href="/farmaciamenores">
                    <img src={farmaciaMenores} alt="" />
                  </a>
                  <h5>Farmacia para especies menores</h5>
                </div>
                <div className="item">
                  <a href="/lecheria">
                    <img src={lecheria} alt="" />
                  </a>
                  <h5>Lechería</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
