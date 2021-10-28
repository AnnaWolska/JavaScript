import React, { Component } from "react";
import ReactDOM from "react-dom";

// ### Zadanie 0b - `js/task0b.js`
// Stwórz komponent o nazwie `AddNumbers`. Do props przekaż mu liczbę A (`numberA`) oraz liczbę B (`numberB`).
// Powinien on wyświetlać w elemencie `h1` **sumę tych dwóch liczb**. Wyrenderuj go na stronie podając w atrybutach do props przykładowe liczby.
// Zadanie wykonaj w **dwóch wersjach**:
// - Najpierw komponentem w wersji funkcyjnej,
// - Oraz tym samym komponentem w wersji zbudowanej z klasy ES6.


function AddNumbers(props) {
  return (
    <div>
      <h1>"suma dwóch liczb (to jest funkcyjnie) to: {parseInt(props.numberA) + parseInt(props.numberB)}"</h1>
    </div>
  );
}

// const element = < AddNumbers numberA="5" numberB="3" />;
// ReactDOM.render(
//   element,
//   document.getElementById('app')
// );


class AddNumbers2 extends Component {
  render() {
    return <h1> "suma dwóch liczb(to jest klasowo) to: {parseInt(this.props.numberA) + parseInt(this.props.numberB)}</h1>;
  }
}

// class AddNumbers2 extends Component {
//   render() {
//     return <h1> {AddNumbers} to jest klasowo </h1>;
//   }
// }


const element = <div> < AddNumbers numberA="6" numberB="6" /> < AddNumbers2 numberA="5" numberB="11" /> </div>

ReactDOM.render(
  element,
  document.getElementById('app')
);



// Problem: co znaczy zrobić w wersji zbudowanej ES6 ->tym samym<- komponentem co w wersji funkcyjnej