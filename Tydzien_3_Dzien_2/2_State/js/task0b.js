import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 0b - `js/task0b.js`
// Stwórz komponent `TextTyper`. Przyjmuje on przez props wartość `text`.
// Komponent ma wyrenderować pierwszą literę tego napisu w elemencie `h1`. 
// Pamiętaj aby do przechowywania znaków, które mają być wyświetlone, skorzystać ze `state`.
// Dodaj **do swojego komponentu interval**, który sprawi, że co 1 sekundę pojawi się w elemencie `h1` 
// coraz więcej liter (co sekundę 1 = kolejny znak). 
// Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia a także aby zwolnić zasoby.
// Efekt po kolei może wyglądać tak dla text ustawionego na "Witaj!":
// - 0s.: W
// - 1s.: Wi
// - 2s.: Wit
// - 3s.: Wita
// - 4s.: Witaj
// - 5s.: Witaj!
// Zajrzyj do narzędzi deweloperskich React. Kliknij na swój komponent - 
// zobaczysz jego `props`, aktualne `state` oraz podświetlenia aktualizacji.
// Pamiętaj aby zbudować także główny komponent `App`, a w nim wykorzystywać 
// komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.

class TextTyper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counterLetter: 0
        };
        console.log("constructor ok");
    }

    componentDidMount(){
        this.intervalID = setInterval(() => {
            this.setState({
                counterLetter: this.state.counterLetter + 1,
            });
        }, 1000);
        console.log("komponent zamontowany");
      }

    componentDidUpdate(){
        console.log('component did update')
    }



    componentWillUnmount(){
        clearInterval(this.timeintervalID);
        console.log("komponent odmontowywany"); 
      } 

    render () {
        console.log("renderowanie");
        return (
            <h1>{this.props.exmpl.substr(0, this.state.counterLetter)}</h1>
        )}
        }

class App extends Component {
    render () {
    return (
            <TextTyper exmpl = "Artur i Łukasz i mama i tata!"/>
    ) }
    }

ReactDOM.render(<App />, document.getElementById("app"));
