import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const myclick = (name, price) => {
  alert(`You have to pay ${price} ) to buy ${name}`);
};

function Car(props) {
  return (
    <div>
    <div className="cardviwe">
      <Card  >
        <Card.Img variant="top" src={props.car.imgSrc}  style={{ width: "300px" }} />
        <Card.Body>
          <Card.Title>{props.car.name}</Card.Title>
          <Card.Text>{props.car.price} $</Card.Text>
          <Button
            variant="secondary"
            onClick={() => myclick(props.car.name, props.car.price)}
          >
            ADD CARD
          </Button>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}
export default Car;
