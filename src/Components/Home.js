import React from "react";
import "./App.css";
// import {
//   FaShoppingCart,
//   FaInstagram,
//   FaFacebook,
//   FaMailBulk,
//   FaPhoneAlt,
// } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="about">
        <h1>
          <u>About</u>
        </h1>
        <br />
        <p>
          Buying vintage means you are more likely to find carefully handcrafted
          pieces of jewelry. <br /> Skilled artisans took their time with
          vintage pieces that led to durability. <br /> Vintage jewelry has
          already passed the test of time!
        </p>
        <br />

        <h1>
          <u>Our Mission</u>
        </h1>
        <p>
          Our mission is to do the heavy lifting for you <br /> by making sure
          our Jewelry are carefully sourced from reliable venders, <br />{" "}
          leaving you with quality pieces.
        </p>
      </div>
    </>
  );
}
export default Home;
