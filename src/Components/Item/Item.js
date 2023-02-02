//import React, { useState } from "react";
import "./Item.css";
import { ReactComponent as Cat } from "./cat.svg";


function Item() {
  // const toggle = false;
  // const styleCSS = { color: toggle ? "crimson" : "green", fontSize: "50px" };

  return (
    <div>
      <h1 className="titre-item">Hello depuis Item</h1>
      <img src={process.env.PUBLIC_URL + '/imgNightVue.jpg'} alt="" />
      <Cat />
    </div>
  );
}

export default Item;
