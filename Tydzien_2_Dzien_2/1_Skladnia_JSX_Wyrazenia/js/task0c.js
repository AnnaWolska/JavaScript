import React from "react";
import ReactDOM from "react-dom";



// W pliku `js/data/person.js` znajduje się obiekt reprezentujący osobę. Zaimportuj go do pliku `js/task0c.js`, np. za pomocą:

// ```js
// import Person from './data/person';
// ```
// Następnie za pomocą React wyrenderuj w elemencie o id `app` element `ul`, 
// w którym będzie się wyświetlał tytuł, imię, nazwisko oraz wiek tej osoby. 
// Każda z tych wartości niech będzie umieszczona w osobnym elemencie `li` (na koniec powinniśmy mieć 4 elementy `li`). 
// Nazwy tych właściwości obiektu znajdziesz w importowanym pliku.

import Person from './data/person';

ReactDOM.render(
  <h1>
    <ul>
      <li>{Person.title}</li>
      <li>{Person.name}</li>
      <li>{Person.surname}</li>
      <li>{Person.age}</li>
    </ul>
  </h1>,
  document.getElementById("app")
);