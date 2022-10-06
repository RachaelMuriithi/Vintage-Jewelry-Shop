import React, { useEffect, useState } from "react";
import "./App.css";
import { useCart } from "react-use-cart";

function ShoppingCart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;
  return (
    <section className="py-4 container"> <br/>
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
           Cart ({totalUniqueItems}) total Items: ({totalItems}){" "}
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, id) => {
                return (
                  <tr key={id}>
                    <td>
                      <img src={item.url} style={{ height: "10rem", marginBottom: "4%", marginRight: "5%" }} />
                    </td>
                    <td>{item.title}</td>
                    <td><strong>{item.price}$</strong></td>
                    <td><strong>Qty {item.quantity}</strong></td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        style={{ height: "2rem"}}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <strong>-</strong> 
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        style={{ height: "2rem"}}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                       <strong>+</strong> 
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        style={{ height: "2rem"}}
                        onClick={() => removeItem(item.id)}
                      >
                        <strong>Remove Item</strong> 
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price: {cartTotal} $</h2>
        </div>
        <div className="col-auto">
              <button 
              className="btn btn-danger m-2"
              onClick={() => emptyCart()}
              ><strong>Clear Cart</strong></button>
              <button className="btn btn-primary m-2"><strong>Buy Now</strong></button>
        </div>
      </div>
    </section>
  );
}
export default ShoppingCart;
