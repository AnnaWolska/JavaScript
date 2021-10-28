import React from "react";
import ReactDOM from "react-dom";


const A = parseFloat(prompt("podaj liczbę A", "0"));
const B = parseFloat(prompt("podaj liczbę B", "0"));
ReactDOM.render(
  <h1>Hello, World! {A + B}</h1>,
  document.getElementById("app")
);


// ### Zadanie 0a - `js/task0a.js`
// Po załadowaniu się strony wyświetl użytkownikowi dwa razy prompt(), zachęcając do podania liczby A i B. 
// Odpowiedzi przechowuj w zmiennych. 
// Nie zapomnij o użyciu parseFloat(str) aby zmienić wartość typu string w zmienną typu number.
// Następnie za pomocą React wyrenderuj w elemencie o id app element div,
//  w którym będzie się wyświetlał wynik dodawania liczby A i B. Dodawanie wykonaj bezpośrednio w wyrażeniu w tagu JSX.

