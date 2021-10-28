import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 02 - `js/task02.js`
// Stwórz komponent `StrobeLight`. Przyjmuje on przez props dwie wartości: 
// kolor światła (`color`) oraz częstotliwość mrugania w ms (`frequency`).
// Komponent ma wyrenderować pusty element `div` z następującymi stylami:
// - Szerokość: `500px`,
// - Wysokość: `50px`,
// - Kolor tła: `white`.
// Dodaj do komponentu `interval`, który sprawi, że co określoną ilość ms 
// (`frequency`) będzie się zmieniać kolor tła naprzemiennie:
// Jeżeli wcześniej był kolor biały - na kolor z props,
// W przeciwnym wypadku na kolor biały.
// Wyrenderuj komponent kilka razy z przykładowymi danymi.
// Zajrzyj do narzędzi deweloperskich React. Kliknij na swoje komponenty - 
// zobaczysz ich props, aktualne state oraz podświetlenia aktualizacji.
// Pamiętaj aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać 
// komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.

class StrobeLight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '500px',
            height: '50px',
            backgroundColor: 'pink',
        }
    }
    componentDidMount(){
        this.intervalMyWhateverFunc = setInterval( () => {
            if (this.state.backgroundColor === 'green') {
                this.setState({
                   backgroundColor: this.props.color
                }); 
            } else {
                this.setState({
                    backgroundColor: 'green'
                })
            }
        }, this.props.frequency);
      }

      render () {
        return <>
            <div style = {this.state}/>
            </>
        }
    }

class App extends Component {
    render () {
    return (
        <StrobeLight color = {'blue'} frequency = {1000}/>
    ) }
    }

ReactDOM.render(<App />, document.getElementById("app"));
    