import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1 - `js/task01.js`
// Stwórz komponent `PassParameter` z elementem `a`. Po kliknięciu na przycisk 
// wywołaj metodę `handleClickButton()`, do której jako parametr przekaż dowolny string. 
// Zadaniem metody `handleClickButton()` ma być wypisanie przekazanego tekstu w konsoli.
// Dodatkowo zatrzymaj domyślną akcję przycisku. 
// Musisz do metody `handleClickButton()` przekazać dwa parametry:
// - dowolny string
// - event
// Zatrzymanie domyślnej akcji to `event.preventDefault()`.

class PassParameter extends Component {    //rodzic
    constructor(props) {
        super(props);
        this.state = {
            txt: "tralalalaaaaaa"
        }
    }
    
    handleBtnClick = (txt) => e => {     
        // this.setState({
        //      txt: this.txt
        // }) 
        e.preventDefault()
        console.log(txt);

    };   
        
    render () {     
        return (
            <div>
                <h1> {this.state.txt}</h1>
                <a href = "wyborcza.pl" onClick = {this.handleBtnClick(this.state.txt)}> link </a>
            </div>
        )};
    };

class App extends Component {
    render () {
        return (
            <div>
                < PassParameter />
            </div>
        ) }
        };

ReactDOM.render(<App />, document.getElementById("app"));
