//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME. = anuj mittal
//Copyright CURRENTYEAR. =2021
const name = "Anuj Mittal";
const date = new Date();
console.log(date);
const no = "93545**199";
ReactDOM.render(
  <div>
    <p> Created by YOURNAME {name}.</p>
    <p>Copyright CURRENTYEAR {no}.</p>
  </div>,
  document.getElementById("root")
);

//E.g.
//Created by Angela Yu.
//Copyright 2019.
