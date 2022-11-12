import React from "react";
import data from "../api/db-accesorios-a5.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Accesoriosa5 = () => {
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
            <div className="product-bx wow zoomIn">
              <h2>Otros</h2>
              <br />
              <br />
              <Grid>
                {data.map((datas) => {
                  return (
                    <GridItem key={datas.id}>
                      <Card key={datas.id}>
                        <Link to={"/accesorio-a5/" + datas.id}>
                          <img src={datas.image} alt={datas.image} />
                        </Link>
                        <h3>{datas.name}</h3>
                        <br />
                      </Card>
                    </GridItem>
                  );
                })}
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
    width: 300px;
    height: 200px;
    padding: 5%;
    border-radius: 15%;
  }
  a {
    text-decoration: none;
  }
  h3 {
    text-align: center;
    padding: 1rem;
    display: block;
    justify-content: center;
  }
`;
