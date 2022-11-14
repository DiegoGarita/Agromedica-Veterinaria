import React from "react";
import styled from "styled-components";
import data from "../api/db-peluqueria.json";

export const Peluqueria = () => {
  return (
    <section className="product" id="peluqueria">
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
              <h2>Peluquería</h2>
              <br />
              <br />
              <br />
              <Grid>
                {data.map((datas) => {
                  return (
                    <GridItem key={datas.id}>
                      <div className="row">
                        <div className="col-12">
                          <div className="image_services">
                            <img
                              className="image__img"
                              src={datas.image}
                              alt={datas.image}
                            />
                            <div className="image__overlay">
                              <div className="image__description">
                                <ol>
                                  <li>{datas.description1}</li>
                                  <li>{datas.description2}</li>
                                  <li>{datas.description3}</li>
                                  <li>{datas.description4}</li>
                                  <li>{datas.description5}</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <hr />
                      <br />
                    </GridItem>
                  );
                })}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Grid = styled.div`
  display: grid;
  flex-wrap: wrap;
  margin-left: 5%;
  margin-right: 5%;
`;

const GridItem = styled.div`
  justify-content: baseline;
  margin: auto;
`;
