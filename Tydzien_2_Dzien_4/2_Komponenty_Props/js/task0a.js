import React, { Component } from "react";
import ReactDOM from "react-dom";

// ### Zadanie 0a - `js/task0a.js`
// Stwórz komponent `Hello`. Do `props` przekazuje mu się imię (`name`) oraz nazwisko (`surname`).
// Powinien on wyświetlać w elemencie `h1` napis "Hello, name surname" z odpowiednimi danymi. 
// Wyrenderuj go na stronie podając w atrybutach do `props` swoje dane.
// Zadanie wykonaj w **dwóch wersjach**:
// - Najpierw komponentem w wersji funkcyjnej,
// - Oraz tym samym komponentem w wersji zbudowanej z klasy ES6.

function Hello(props) {
  return (
    <div>
      <h1>"Hello (to jest funkcyjnie), {props.name} {props.surname}"</h1>
    </div>
  );
}

class Hello2 extends Component {
  render() {
    return <h1>Hi (to jest klasowo), {this.props.name2} {this.props.surname2}</h1>;
  }
}

const element = <Hello name="Anna" surname="Wolska" />;
const element2 = <Hello2 name2="Anna2" surname2="Wolska2" />;
const elements =
  <div>
    {element} {element2}
  </div>
ReactDOM.render(
  elements,
  document.getElementById('app')
);
