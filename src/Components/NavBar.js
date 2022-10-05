import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="About__content">
      <ul className="unlist">
        <li className="li_list">
          <Link to="/" id="logo">
            <i>VINTG</i> <br />
            <span>RaysVintageJewellery</span>
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
            <button>Necklace & Bracelets Category</button>
          </Link>
        </li>
        <li className="li_list">
          <Link to="/shoppingcart">
            <button>
              <FaShoppingCart size="1.5em" /> Add to cart
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
