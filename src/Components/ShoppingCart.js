import React, { useEffect, useState } from "react";
import "./App.css";
import {useCart} from "react-use-cart";

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
  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
  return (
    <div>
      cart
    </div>
  )
};
export default ShoppingCart;
