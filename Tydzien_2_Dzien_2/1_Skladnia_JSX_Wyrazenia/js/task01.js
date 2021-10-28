import React from "react";
import ReactDOM from "react-dom";



// ### Zadanie 1 - `js/task01.js`

// Stwórz prosty kalkulator, który liczy wynik dodawania, odejmowania, mnożenia lub dzielenia.
// Możesz skorzystać z kodu zadania w wykładowcą. Zmodyfikuj je w taki sposób aby wyświetlać jeszcze jeden `prompt()`, 
// który ma pobierać jeden ze znaków: `+`, `-`, `*` lub `/` - odpowiada on operacjom matematycznym, jakie zostaną wykonane na liczbach A i B.
// Zadanie wykonaj w taki sposób aby w zależności od operacji był renderowany inny element: dla dodawania element `h1`, 
// dla odejmowania element `h2`, dla mnożenia element `h3`, a dla dzielenia element `h4`. 
// Operacje matematyczne wykonuj bezpośrednio w wyrażeniu w danym tagu JSX.



const numA = parseFloat(prompt("Podaj liczbę"));
const numB = parseFloat(prompt("Podaj drugą liczbę"));
const whatToDo = prompt("Podaj jeden ze znaków: `+`, `-`, `*` lub `/`")

let resoult = 0;
let resoult2 = 0;
let resoult3 = 0;
let resoult4 = 0;


switch(whatToDo) {
  case "+": {
    resoult = <span> {numA + numB} </span>;
 
    ReactDOM.render(
      <div>
        <h1>{resoult}</h1>
    
      </div>,
      document.getElementById("app")
    );
    break;
  }
  case "-": {
    resoult2 = <span> {numA - numB} </span>;
    
    ReactDOM.render(
      <div>
        <h1>{resoult2}</h1>
    
      </div>,
      document.getElementById("app")
    );
    break;
  }
  case "*": {
    resoult3 = <span> {numA * numB} </span>;
    ReactDOM.render(
      <div>
        <h1>{resoult3}</h1>
    
      </div>,
      document.getElementById("app")
    );
    break;
  }
  case "/": {
    resoult4 = <span> {numA / numB} </span>;
    ReactDOM.render(
      <div>
        <h1>{resoult4}</h1>
    
      </div>,
      document.getElementById("app")
    );
    break;
  }
}


