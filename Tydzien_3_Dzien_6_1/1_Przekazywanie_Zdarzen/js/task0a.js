import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 0a - `js/task0a.js`
// Stwórz komponent `ButtonCounter` oraz komponent `ButtonToClick`.
// Komponent `ButtonCounter` wyświetla `div`, a w nim `h1` oraz 2 przyciski 
// stworzone za pomocą komponentu `ButtonToClick`. W `h1` ma być na początku wyświetlane 0 
// - docelowo ma tam się wyświetlać ile razy (łącznie) zostały kliknięte przyciski.
// Komponent `ButtonToClick` zawiera  przycisk `button`, po kliknięciu którego jest 
// przesyłana odpowiednia informacja do callbacku, który pobiera z props atrybut 
// pod nazwą `onClick`. **Nie zapomnij sprawdzić czy ten atrybut został odpowiednio 
// przekazany i jest funkcją.**
// Na schemacie poniżej zostało zobrazowane, jak mniej więcej powinien wyglądać 
// proces przkazywania funkcji i gdzie ona jest wywoływana. 
// To tylko rysunek poglądowy, pomagający zrozumieć cały proces.
// ![Schemat dla zadania 0](img/task0a.jpg "Schemat dla zadania 1")


class ButtonCounter extends Component {    //rodzic
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        }
    }

    handleBtnClick = () => {     
        this.setState({
             clicks: this.state.clicks + 1
        }) 
        console.log("kilknięto");
        console.log(this.state.clicks);
    };   
        
    render () {      //  to za pomocą props przekazuję od rodzica do dzieci (do callbacku handleClick ) atrybut onClick, który jest funkcją handleBtnClick
        return (
            <div>
                <h1> {this.state.clicks}</h1>
                < ButtonToClick onClick = {this.handleBtnClick} />  
                < ButtonToClick onClick = {this.handleBtnClick} />
            </div>
        )}
    };

class ButtonToClick extends Component {  // dziecko
    handleClick = () => {
        if (typeof this.props.onClick === "function")
        this.props.onClick()  //to tu callback pobiera z props atrybut (który jest funkcją handleBtnClick) pod nazwą `onClick` od rodzica
    }
    render () {
        return (
            <div>
                 <button onClick = {this.handleClick} >kliknij mnie:)</button>  
                 
            </div>
        ) }   // jest przesyłana odpowiednia informacja do callbacku handleBtnClick
        };

class App extends Component {
    render () {
        return (
            <div>
                < ButtonCounter />
            </div>
        ) }
        };

ReactDOM.render(<App />, document.getElementById("app"));

