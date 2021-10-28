import React from "react";
import ReactDOM from "react-dom";
import People from "./data/people";
// import people from "./data/people";

// ### Zadanie 2 - `js/task02.js`
// W pliku `js/data/people.js` znajduje się tablica z obiektami reprezentującymi różne osoby. 
// Zaimportuj ją do pliku `js/task02.js` za pomocą:
// import People from "./data/people"

// Zadaniem jest przeiterowanie po całej tablicy obiektów, tak aby stworzyć tablicę z gotowymi elementami `JSX`.
//  Każdy element tej nowo utworzonej tablicy powinien mieć strukturę zbliżoną do następującej:
// ```html
// <div class="person">
//     <img src={ avatar } />
//     <div class="info">
//         <h1>{ tytuł + imię + nazwisko }</h1>
//         <p>{ bio }</p>
//     </div>
// </div>
// ```
// Powyższy kod jest jedynie poglądowy. Pamiętaj, w jaki sposób powinna być przekazywana nazwa klasy `CSS` w tagach `JSX` 
// oraz o odpowiednich zamknięciach znaczników. Nazwy tych właściwości obiektu znajdziesz w importowanym pliku.
// Efektem powinny być elementy podobne do tego:
// ![](img/task02.png)
// Następnie za pomocą React wyrenderuj w elemencie o id `app` element `<>`, 
// w którym będą się wyświetlały wszystkie wygenerowane elementy `div`.
// **Pamiętaj o użyciu odpowiedniego klucza!**

const tableJsx = People.map(element => {
  return <li key={element.pesel}>
    <div className="person">
      <img src={element.avatar} />
      <div className="info">
        <h1>{element.title + element.name + element.surname}</h1>
        <p>{element.bio}</p>
      </div>
    </div>
  </li>
});




ReactDOM.render(
  <>{tableJsx}</>,
  document.getElementById("app")
);


