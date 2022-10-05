import React from "react";
import "./App.css";
import Footer from "./Footer";
import {
  FaInstagram,
  FaFacebook,
  FaMailBulk,
  FaPhoneAlt,
} from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="about">
        <br />
        <h1>
          <u>About</u>
        </h1>
        <p>
          Buying vintage means you are more likely to find carefully handcrafted
          pieces of jewelry. <br /> Skilled artisans took their time with
          vintage pieces that led to durability. <br /> Vintage jewelry has
          already passed the test of time!
        </p>
        <br />
        <br/>
        <br/>
        <h1>
          <u>Our Mission</u>
        </h1>
        <p>
          Our mission is to do the heavy lifting for you <br /> by making sure
          our Jewelry are carefully sourced from reliable venders, <br />{" "}
          leaving you with quality pieces.
        </p>
        <div>
          <ul className="contact_us">
            <a href="#">
              <li>
                <FaPhoneAlt size="1.5em" /> +254756555467
              </li>
            </a>
            <a href="#">
              <li>
                <FaMailBulk size="1.5em" /> raysVintage@gmail.com
              </li>
            </a>
            <a href="#">
              <li>
                <FaInstagram size="1.5em" /> rays_vintage
              </li>
            </a>
            <a href="#">
              <li>
                <FaFacebook size="1.5em" /> rays_vintage
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Home;
