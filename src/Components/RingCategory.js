import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";

function RingCategory() {
  const [rings, setRings] = useState([]);
  // Add useEffect hook
  useEffect(() => {
    fetch("http://localhost:3000/rings")
      .then((r) => r.json())
      .then((items) => console.log(items));
  }, []);
  return (
    <div className="ring">
      <br />
      <h1></h1>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default RingCategory;
