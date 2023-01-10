import React from "react";
import Container from "react-bootstrap/Container";
import logoMice from "../assets/images/alcor-mice.png";
import logoBoga from "../assets/images/alcor-boga.png";
import logoResources from "../assets/images/alcor-resources.png";

const HeaderComp = () => {
  return (
    <div className="box-1">
      <Container className="content_1">
        <h2>To build businesses that give impact to the society</h2>
        <p className="my-3">
          Alcor Prime was founded in the end of year 2015. It was motivated with
          an aim to strengthen six companies of eleven brands under the
          management of PT Wahana Inspirasi Bintang. The Alcor Prime's Three
          Pillars are Alcor MICE, Alcor Boga, and Alcor Resources. They are
          expected to be eminent stars in each industrial field.
        </p>
      </Container>
      <div className="content_2">
        <div className="text-center">
        <img
            src={logoMice}
            alt="logo mice"
          />
          <p>field of MICE (Meeting, Incentive, Convention, and Exhibition) industry</p>
        </div>
        <div className="text-center">
        <img
            src={logoBoga}
            alt="logo boga"
          />
          <p>field of F&B (Food and Beverages) industry</p>
        </div>
        <div className="text-center">
        <img
            src={logoResources}
            alt="logo resources"
          />
          <p>field of Christian Resources industry</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
