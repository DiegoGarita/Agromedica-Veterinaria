import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import data from "../api/db-farmaciamenores-f6.json";

export const FarmaciaMenoresElementsf6 = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let params = useParams();

  return (
    <section>
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
          <div className="col-6">
            <div className="product-bx wow zoomIn">
              <Grid>
                <GridItem>
                  <Card>
                    {" "}
                    <div className="image">
                      <div id="zoom-In">
                        <img
                          src={data[params.id - 1].image}
                          alt={data[params.id - 1].image}
                        />
                      </div>
                    </div>
                  </Card>
                </GridItem>
              </Grid>
            </div>
          </div>
          <div className="col-6">
            <div className="product-bx2 wow zoomIn">
              <Grid>
                <GridItem>
                  <Card>
                    <h2>{data[params.id - 1].name}</h2>
                    <br />
                    <p>{data[params.id - 1].description}</p>
                    <p>{data[params.id - 1].details}</p>
                  </Card>
                </GridItem>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
  margin-right: 5%;
`;
const GridItem = styled.div`
  justify-content: baseline;
  margin: auto;
`;
const Card = styled.div`
  img {
    width: 95%;
    height: 80%;
    padding: 5%;
  }
  a {
    text-decoration: none;
  }
  h2 {
    text-align: center;
    padding: 1rem;
    display: block;
    justify-content: center;
  }
  @media (max-width: 500px) {
    img {
      width: 200px;
      margin-left: -110px;
    }
  }
`;
