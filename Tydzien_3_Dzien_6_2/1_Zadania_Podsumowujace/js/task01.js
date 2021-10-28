import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1 - `js/task01.js`
// Stwórz komponent `AnotherColor`, który przechowuje kolor do wyświetlenia jako **stan lokalny**. 
// Niech kolor będzie domyślnie nastawiony na "yellow".
// Komponent ma wyrenderować ten element `div` z tłem ustawionym na to ze stanu lokalnego.
// Dodaj do swojego komponentu timer, który po 5 sekundach zmieni ten kolor na "blue". 
// **Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**


class AnotherColor extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor : "yellow"
        }
    }
    componentDidMount(){
        this.timer = setTimeout(() => {
            this.setState({
                backgroundColor: "blue",
            });
        }, 3000);
        console.log("komponent zamontowany");
      }
    componentWillUnmount(){
        clearTimeout(this.timer);
        console.log("komponent odmontowywany"); 
      } 
        
    render () {      
        return (
            <div style = {this.state}>
                     to jest mój div
            </div>
        )}
    };

class App extends Component {
    render () {
        return (
            <div>
                < AnotherColor />
            </div>
        ) }
        };

ReactDOM.render(<App />, document.getElementById("app"));

