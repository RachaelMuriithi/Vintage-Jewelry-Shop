import React from "react";
import "./About.css";
import {
  FaShoppingCart,
  FaInstagram,
  FaFacebook,
  FaMailBulk,
  FaPhoneAlt,
} from "react-icons/fa";

function About() {
  return (
    <>
      <ul className="About__content">
        <li className="li_list" id="logo">
          <i>VINTG</i> <br />
          <span>Rays Vintage Jewelry Shop</span>
        </li>
        <li className="li_list">
          <button>About</button>
        </li>
        <li className="li_list">
          <button>Rings Category</button>
        </li>
        <li className="li_list">
          <button>Watch Category</button>
        </li>
        <li className="li_list" id="cart">
          <button>Necklace & Bracelets Category</button>
        </li>
        <li className="li_list">
          <button>
            <FaShoppingCart size="1.5em" /> Add to cart
          </button>
        </li>
      </ul>
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

      <ul className="contact_us">
        <a href="#">
          <li>
            <FaPhoneAlt size="1.5em" /> +2547565554
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
    </>
  );
}
export default About;
