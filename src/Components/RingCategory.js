import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function RingCategory() {
  const [rings, setRings] = useState([]);
  // Add useEffect hook
  useEffect(() => {
    //fetch the ring items
    fetch("http://localhost:3000/rings")
      .then((r) => r.json())
      .then((rings) => setRings(rings));
  }, []);

  return (
    <div className="ring">
      <br />
      {/* //display the ring items */}
      {rings.map((ring, id) => {
        return (
          <div className="rings">
            <CardGroup style={{ width: "48rem" }}>
              <Card.Img variant="top" src={ring.url} alt={ring.title} /> <br />{" "}
              <br />
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "600",
                    color: "whitesmoke",
                    fontSize: "20px",
                  }}
                  key="ring.id"
                >
                  {ring.title}
                </Card.Title>
                <Card.Text
                  style={{
                    fontWeight: "400",
                    color: "whitesmoke",
                    fontSize: "19px",
                  }}
                >
                  {ring.description}
                </Card.Text>
                <Button
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
export default RingCategory;
