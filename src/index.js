//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const fname = "Priyanshu";
const lname = "Gupta";
ReactDOM.render(
  <div>
    <h1>
      Hi My Name is {fname} {lname}{" "}
    </h1>
    <p>Your lucky no. is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
