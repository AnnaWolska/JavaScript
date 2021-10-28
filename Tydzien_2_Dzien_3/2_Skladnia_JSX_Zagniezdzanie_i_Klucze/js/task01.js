import React from "react";
import ReactDOM from "react-dom";
import Person from "./data/person";
import { Fragment } from "react";


// ### Zadanie 1  - `js/task01.js`
// W pliku `js/data/person.js` znajduje się obiekt reprezentujący osobę. Zaimportuj go do pliku `js/task01.js` za pomocą:
// ```js
// import Person from "./data/person";
// ```
// Celem tego zadania jest wyświetlenie na stronie wszystkich informacji zawartych w tym obiekcie. Struktura tego elementu powinna wyglądać następująco:
// ```HTML
// <h1>{ tytuł + imię + nazwisko }</h1>
// <span>{ wiek }</span>
// ```
// Bezpośrednim rodzicem elementów `h1` i `span` ma być element o id `app`. Należy tutaj skorzystać z `React.Fragment`.

const smth =
  <Fragment>
    <h1>{Person.title + Person.name + Person.surname}</h1>
    <span>{Person.age}</span>
  </Fragment>




ReactDOM.render(
  <div>{smth}</div>,
  document.getElementById("app")
);

