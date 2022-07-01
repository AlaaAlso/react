import React from "react";
import Car from "./Car";

const Carss = (props) => {
  return (
    <div>
      <div className="cardviwe">
        {props.carsinfo.map((car, i) => (
          <Car key={i} car={car} />
        ))}{" "}
      </div>

      <div className="totalstyle">
        <h1>
          Total :<span> {props.carsinfo.reduce((x, i) => x + i.price, 0)}</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Carss;
