import React from "react";
import ReactDOM from "react-dom";



// Skopiuj działający wynik **zadania 3** do pliku `js/task02.js`.
// Przerób to zadanie w taki sposób aby powstała funkcja `calc(a, b, operation)`, 
// która za argumenty przyjmuje liczbę A, B i operację do wykonania jako string (jeden ze znaków: `+`, `-`, `*` lub `/`). 
// Funkcja ta ma zwracać gotowy tag JSX ```h1```...```h4```.
// Następnie przerób miejsce, w którym korzystasz z ```ReactDOM.render()``` 
// w taki sposób aby renderował element ```div```, a w nim bezpośrednio wynik działania funkcji ```calc()```.



function calc(numA, numB, operation){
let resoult = 0;

switch(operation) {
  case "+": {
    resoult = <span> {numA + numB} </span>;
    break;
  }
  case "-": {
    resoult = <span> {numA - numB} </span>;
    break;
  }
  case "*": {
    resoult = <span> {numA * numB} </span>;
    break;
  }
  case "/": {
    resoult = <span> {numA / numB} </span>;
    break;
  }
}
return resoult;
}

  ReactDOM.render(
      <div>
        <h1>{calc(4,3,"*")}</h1>
    
      </div>,
      document.getElementById("app")
    );


