import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useCart } from "react-use-cart"

function WatchCategory() {
  const {addItem} = useCart();
  const [watches, setWatches] = useState([]);
  // Add useEffect hook
  useEffect(() => {
    //fetch the watch items
    fetch("http://localhost:3000/watches")
      .then((r) => r.json())
      .then((watches) => setWatches(watches));
  }, []);

  return (
    <div className="watch">
      <br />
      {/* //display the ring items */}
      {watches.map((watch, key) => {
        return (
          <div className="watches">
            <CardGroup style={{ width: "48rem" }} key={watch.id} >
              <Card.Img variant="top" src={watch.url} alt={watch.title} />{" "}
              <br />
              <br />
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "600",
                    color: "whitesmoke",
                    fontSize: "20px",
                  }}
                >
                  {watch.title}
                </Card.Title>
                <Card.Text
                  style={{
                    fontWeight: "400",
                    color: "whitesmoke",
                    fontSize: "19px",
                  }}
                >
                  {watch.description}
                </Card.Text>
                <Card.Text
                  style={{
                    fontWeight: "400",
                    color: "whitesmoke",
                    fontSize: "19px",
                  }}
                >
                  <b>Price: {watch.price}</b>
                </Card.Text>
                <Button
                  onClick = {() => addItem(watch)}
                  style={{
                    width: "13rem",
                    height: "2rem",
                    fontSize: "16px",
                    fontWeight: "600",
                    backgroundColor: "rgb(184,162,125)",
                  }}
                  variant="primary"
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </CardGroup>
          </div>
        );
      })}
    </div>
  );
}

export default WatchCategory;
