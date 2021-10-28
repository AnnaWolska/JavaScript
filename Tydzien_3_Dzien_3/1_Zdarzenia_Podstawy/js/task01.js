import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1 - `js/task01.js`
// Stwórz komponent o nazwie `Buttons` z 3 przyciskami z napisem "Klik!".
// - Po kliknięciu na pierwszy przycisk wyświetl w konsoli "Pierwszy przycisk kliknięty".
// - Po kliknięciu na drugi przycisk wywołaj dwruktonie funkcję `prompt()`, 
// służącą do pobrania od użytkownika liczby A i B. 
// W konsoli wyświetlcie wynik potęgowania tych dwóch liczb.
// - Po kliknięciu na trzeci przycisk wyświetl w konsoli szerokość i wysokość ekranu 
// (z obiektu `window`).


class Buttons extends Component {
    handleStartClick () {
      console.log("Pierwszy przycisk kliknięty");
    }
    takeNumbers () {
        let numberA = prompt ("Podaj pierwszą liczbę: ")
        let numberB = prompt ("Podaj drugą liczbę: ")
        console.log(parseInt(numberA) + parseInt(numberB))
    }
    windowInformation () {
        console.log(window.innerWidth)
        console.log(window.innerHeight)
    }
   
    render(){
      return (
        <>
          <h2>Start clicking!</h2>
          <button onClick={this.handleStartClick}>Start!</button>
          <button onClick={this.takeNumbers}>Start!</button>
          <button onClick={this.windowInformation}>Start!</button>
        </>
      );
    }
  }



ReactDOM.render(<Buttons/>, document.getElementById("app"));
