import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="About__content">
      <ul>
      <li className="li_list" id="logo"> <Link to="/home">
          <i>VINTG</i> <br />
          <span>Rays Vintage Jewelry Shop</span>
          </Link>
        </li>
        <li className="li_list">
          <Link to="/watch">
            <button>WatchCategory</button>
          </Link>
        </li>
        <li className="li_list">
          <Link to="/ring">
            <button>RingCategory</button>
          </Link>
        </li>
        <li className="li_list" id="cart">
          <Link to="/necklace">
            <button>
              Necklace & Bracelets Category
            </button>
          </Link>
        </li>
        <li className="li_list">
          <link to="/shoppingcart">
            <button>
              <FaShoppingCart size="1.5em" /> Add to cart
            </button>
          </link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
