import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useCart } from "react-use-cart"

function NecklaceCategory(handleSubmit) {
  //add item to cart call
    const {addItem} = useCart();
  const [necklaces, setNecklaces] = useState([]);
  // Add useEffect hook
  useEffect(() => {
    //fetch the necklace items
    fetch("http://localhost:3000/necklaces")
      .then((r) => r.json())
      .then((necklaces) => setNecklaces(necklaces));
  }, []);

  return (
    <div className="necklace">
      <br />
      {/* //display the necklace items */}
      {necklaces.map((necklace, key) => {
        return (
          <div className="necklaces">
            <CardGroup style={{ width: "48rem" }} key={necklace.id}>
              <Card.Img variant="top" src={necklace.url} alt={necklace.title} /> <br />
              <br />
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "600",
                    color: "whitesmoke",
                    fontSize: "20px",
                  }}
                >
                  {necklace.title}
                </Card.Title>
                <Card.Text
                  style={{
                    fontWeight: "400",
                    color: "whitesmoke",
                    fontSize: "19px",
                  }}
                >
                  {necklace.description}
                </Card.Text>
                <Card.Text
                  style={{
                    fontWeight: "400",
                    color: "whitesmoke",
                    fontSize: "19px",
                  }}
                >
                  <b>Price: {necklace.price} $</b>
                </Card.Text>
                {/* add to cart button */}
                <Button onClick = {() => addItem(necklace)}
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
export default NecklaceCategory;
