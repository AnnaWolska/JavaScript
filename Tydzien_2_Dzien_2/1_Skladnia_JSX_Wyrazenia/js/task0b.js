import React from "react";
import ReactDOM from "react-dom";

const yearOfBirth = parseFloat(prompt("Podaj rok urodzenia", "1900"));
// const yearNow = new Date()
// const year = getFullYear(yearNow)
const yearNow = new Date().getFullYear()

ReactDOM.render(
  <h1>Hello, World! MAsz lat {yearNow - yearOfBirth}</h1>,
  document.getElementById("app")
);

console.log(yearNow);
// console.log(year);
// Za pomocą `prompt()` przyjmij rok urodzenia użytkownika. Odpowiedź przechowuj w zmiennej. 
// Nie zapomnij o użyciu `parseFloat(str)` aby zmienić wartość typu string w zmienną typu `number`.
// Następnie za pomocą metody `new Date().getFullYear()` pobierz aktualny rok.
// Odejmowanie wykonaj bezpośrednio w wyrażeniu w tagu JSX.

