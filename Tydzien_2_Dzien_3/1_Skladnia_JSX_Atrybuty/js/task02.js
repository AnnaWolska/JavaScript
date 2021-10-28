import React from "react";
import ReactDOM from "react-dom";


// ### Zadanie 2 - `js/task02.js`
// W pliku wymienionym powyżej znajdują się trzy zmienne (`redDiv`, `greenDiv`, `blueDiv`) 
// zawierające strukturę JSX pustych elementów `div`.
// Ustaw wszystkim trzem div-om wysokość na ```100px```,
//  a każdemu z nich ustaw kolor tła odpowiadający jego nazwie. **Pamiętaj o użyciu odpowiedniej nazwy stylu**.
// Spróbuj wykonać to zadanie z pomocniczą zmienną (po jednej dla każdego z div-ów), 
// a następnie skrótowym zapisem bezpośrednio w każdym tagu JSX.

const style1 = {
  backgroundColor: "red"
};

const style2 = {
  backgroundColor: "green"
};

const style3 = {
  backgroundColor: "blue"
};

const redDiv = <div style = {style1}> lalall</div>;
const greenDiv = <div style = {style2}> dsdsdsd </div>;
const blueDiv = <div style = {style3}> dsdsdsd </div>;




ReactDOM.render(
  <div>
    {redDiv}{greenDiv}{blueDiv}
  </div>,
  document.getElementById("app")
);


