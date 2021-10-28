import React from "react";
import ReactDOM from "react-dom";

// ### Zadanie 3 - `js/task03.js`
// Za pomocą `prompt()` zapytaj użytkownika o kolor ramki i przechowaj odpowiedź w zmiennej.
// Sprawdź czy odpowiedź to `red`, `green` lub `blue` (możesz wykorzystać metodę `indexOf()`). 
// Jeżeli odpowiedź nie zgadza się z naszym warunkiem, to wyrenderuj w elemencie o id `app` element `div` z napisem "Nieprawidłowy kolor".
// Jeżeli podany kolor był poprawny, to za pomocą React wyrenderuj w elemencie o id `app` element `div`, ze stylami ustawionymi na:
// - Szerokość: `100px`
// - Wysokość: `100px`
// - Grubość ramki: `5px`
// - Styl ramki: `solid`
// - Kolor ramki: **ten podany przez użytkownika**

const giveMeColor = prompt("Jaki chcesz kolor ramki red, green czy blue?");
let divToShow = "";

if (giveMeColor.indexOf('e') === 1) {
  divToShow = <div style={{ width: "100px", height: "100px", borderWidth: "5px", borderStyle: "solid", borderColor: "red" }}>gfgfgfgfg</div>
} else if (giveMeColor.indexOf('e') === 2) {
  divToShow = <div style={{ width: "100px", height: "100px", borderWidth: "5px", borderStyle: "solid", borderColor: "green" }}>hjhjhjhjhjhj</div>
} else if (giveMeColor.indexOf('e') === 3) {
  divToShow = <div style={{ width: "100px", height: "100px", borderWidth: "5px", borderStyle: "solid", borderColor: "blue" }}>rereerererer</div>
} else { divToShow = <div> <p>"Nieprawidłowy kolor"</p></div> };

ReactDOM.render(
  <div> {divToShow} </div>,
  document.getElementById("app")
);












