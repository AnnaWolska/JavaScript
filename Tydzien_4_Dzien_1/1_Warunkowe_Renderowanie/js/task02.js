import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 2 - `js/task02.js`
// Stwórz komponent `NumberInfo`, który przez props przyjmuje `number`.
// Następnie, bezpośrednio wewnątrz JSX, korzystając z operatora trójargumentowego i 
// operatora logicznego `&& `wyrenderuj w elemencie `ul` następujące elementy listy:

// - Liczba
// - Parzysta / nieparzysta
// - Liczba pierwsza (nie pojawia się jeżeli to nieprawda)
// - Potęga liczby 2 (nie pojawia się jeżeli to nieprawda)

// Wyrenderuj i przetestuj swój komponent kilka razy dla atrybutu `number`:
// - 1
// - 2
// - 5
// - 7
// - 10
// - 16


class NumberInfo extends Component {


    isPrime(num) {
        if(num < 2) return false;
        for (var i = 2; i < num; i++) {
            if(num % i == 0)
                return false;
        }
        return true;
    }

    // isPower(n) {
    //     if( Math.pow(n,2) & g )
    // }

    render () {
        
        return (
            <ul>
                <li> {this.props.number}</li>
                <li> {parseInt(this.props.number) % 2 === 0 ? "parzysta" : "nieparzysta"} </li>
                <li> {this.isPrime(parseInt(this.props.number)) && "to liczba pierwsza" } </li>
                <li> ??? </li>
            </ul>
        )
    }
}

class App extends Component {
    render () {
        return  < NumberInfo number = "5"/>
         }
        };

ReactDOM.render(< App />, document.getElementById("app"));



// Math.pow(liczba1, liczba2)
