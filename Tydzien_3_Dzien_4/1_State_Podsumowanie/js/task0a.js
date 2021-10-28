import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 0a - `js/task0a.js`
// Stwórz komponent `Clock`, który przechowuje w `state` aktualną datę.
// Dodaj do swojego komponentu `interval`, który co 1 sekundę aktualizuje datę w state na aktualną. 
// Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia oraz aby zwolnić zasoby.
// Stwórz dwa subkomponenty:
// 1. `ClockTime` - przyjmuje przez props datę (`date`) 
// i wyświetla samą godzinę w elemencie h1 za pomocą `Date.toLocaleTimeString()`.
// 2. `ClockDate` - przyjmuje przez props datę (`date`) 
// i wyświetla samą datę w elemencie h1 za pomocą `Date.toLocaleDateString()`.
// Główny komponent - `Clock` renderuje odpowiednio dwa subkomponenty przekazując im aktualną datę ze swojego state.
// Pamiętaj aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach.
//  Renderuj na stronie główny komponent `App`.

class ClockDate extends Component {

        render () {
            return (
                <>
                    <h1>{this.props.date.toLocaleDateString()}</h1>;
                    {/* odbieram stat'a jako props'a */}
                </>
        )}
}

class ClockTime extends Component {

        render () {
            return (
                <>
                    <h1>{this.props.time.toLocaleTimeString()}</h1>;
                </>
        )}
}

class ClockToShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newDate: new Date(),
        }
    }

    componentDidMount(){
        this.intervalDate = setInterval( () => {
                this.setState({
                    newDate : new Date()
                });                                                                                                
      }, 1000);
      console.log("komponent zamontowany");
    }

      componentWillUnmount(){
        clearInterval(this.intervalDate);
        console.log("komponent odmontowywany"); 
      } 

      render () {
        return (
            <>
            <ClockDate date = {this.state.newDate} /> 
            {/* przekazuje stat'a do props'a */}
            <ClockTime time = {this.state.newDate} />
            </>
        )}
        }

class App extends Component {
    render () {
    return (
        <ClockToShow />
    ) }
    }

ReactDOM.render(<App />, document.getElementById("app"));
    




