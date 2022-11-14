import React from "react";
import consulta from "../assets/img/consulta-icon.png";
import peluqueria from "../assets/img/peluqueria-icon.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Services = () => {
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
    <section className="product" id="servicios">
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
              <h2>Servicios</h2>
              <br />
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="owl-carousel owl-theme product-slider"
              >
                <div className="item">
                  <a href="/Consulta">
                    <img src={consulta} alt="" />
                  </a>
                  <h5>Consulta</h5>
                </div>
                <div className="item">
                  <a href="/Peluqueria">
                    <img src={peluqueria} alt="" />
                  </a>
                  <h5>Peluquería</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
