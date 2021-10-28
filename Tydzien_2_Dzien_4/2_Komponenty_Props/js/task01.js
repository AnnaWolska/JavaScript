import React, { Component, useReducer } from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1 - `js/task01.js`
// Stwórz komponent o nazwie `Sum`. Do `props` przekaż mu tablicę liczb (`numbers`).
// Powinien on wyświetlać w elemencie `h1` sumę wszystkich podanych liczb. 
// Możesz do tego wykorzystać znany Ci `reduce()`. Wyrenderuj go na stronie podając w atrybucie do `props` przykładową tablicę liczb.
// Należy wykonać to zadanie w oparciu o komponent funkcyjny.


const numbers = [1, 3, 5, 6, 18, 5, 10]

const Sum = (props) => {
  return <h1>
 {props.arr.reduce((item, acc) => acc += item, 0)}
  </h1>
}

ReactDOM.render(
  <Sum arr={numbers} />,
  document.getElementById("app")
);



