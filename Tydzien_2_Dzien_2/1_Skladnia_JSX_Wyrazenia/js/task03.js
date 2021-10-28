import React from "react";
import ReactDOM from "react-dom";
import Animals from './data/animals';
import animals from "./data/animals";

// ReactDOM.render(
//   <h1>Hello, World!</h1>,
//   document.getElementById("app")
// );



// ### Zadanie 3  - `js/task03.js`
// W pliku `js/data/animals.js` znajduje się tablica reprezentująca spis zwierząt. 
// Zaimportuj ją do pliku `js/task03.js` np. za pomocą:

// ```js
// import Animals from './data/animals';
// ```
// Następnie za pomocą React wyrenderuj w elemencie o id `app` element section, 
// w którym będzie się wyświetlała łączna liczba zwierząt oraz zostaną one wypisane. 
// Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX.
// Przyda Ci się właściwość `length` oraz metoda `join(separator)`.

ReactDOM.render(
  <h1>
    <section>
      {animals.length} 
      {animals.join(" , ")}
    </section>
  </h1>,
  document.getElementById("app")
);