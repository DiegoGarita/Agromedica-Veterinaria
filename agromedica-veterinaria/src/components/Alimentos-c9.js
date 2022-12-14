import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../api/db-alimentos-c9.json";

export const Alimentosc9 = () => {
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
            <div className="product-bx-alt wow zoomIn">
              <h2>Otras especies</h2>
              <br />
              <br />
              <Grid>
                {data.map((datas) => {
                  return (
                    <GridItem key={datas.id}>
                      <Card key={datas.id}>
                        <Link to={"/alimento-c9/" + datas.id}>
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
    width: 320px;
    height: 180px;
    padding: 5%;
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
