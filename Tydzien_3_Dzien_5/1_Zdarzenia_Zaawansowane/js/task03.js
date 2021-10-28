import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 3 - `js/task03.js`
// > Poniższe zadanie pozwoli Ci stworzyć minigrę, 
// w której gracz ma określony czas by jak najszybciej klikać na przycisk. 
// Czas biegnie coraz szybciej i należy kliknąć tyle razy, 
// ile się uda, zanim czasu między kolejnymi kliknięciami będzie go za mało.
// Stwórz komponent `SpeedClickGame`. Ma on przyjmować czas do odliczania 
// w ms przez props `time` i przechowywać go w stanie lokalnym.
// Komponent składa się z przycisku z napisem "Click me!", 
// elementu `h1` i elementu `h2` w elemencie `div`. 
// W elemencie `h1` wyświetlaj aktualny czas, 
// w `h2` będzie przechowywana liczba punktów (póki co 0).
// Uruchom interval wykonywany co 50ms. **Pamiętaj aby zrobić to 
// w odpowiedniej metodzie cyklu życia a także aby zwolnić zasoby.** 
// W funkcji intervala zmniejszaj aktualny czas o `50ms` 
// i sprawdzaj czy czas się nie skończył. 
// Jeżeli czas się skończył, zablokuj przycisk (`disabled={true}`).
// Po kliknięciu na przycisk dodawany jest punkt a czas 
// zostaje zresetowany, ale jest o `50ms` krótszy niż poprzedni.
// Np. jeżeli atrybut `time` tego komponentu był ustawiony na **1000** to:
// - Brak kliknięć, czas początkowy: 1000ms,
// - Pierwsze kliknięcie, czas początkowy: **950ms**,
// - Drugie kliknięcie, czas początkowy: **900ms**,
// - Trzecie kliknięcie, czas początkowy: **850ms**...
// Wyrenderuj komponent dla props `time` ustawionego na 2000.

class SpeedClickGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: parseInt(this.props.time),
            disabled: false,
            clickNumber: parseInt(0),
            message: "Brawo, Twoja liczba punktów to:"
        }
        
    }
    componentDidMount(){
        this.milisecondCounter = setInterval(() => {
            if (this.state.time > 0) {
                this.setState({
                time: parseInt(this.state.time) - 50
                });
            } else {
                this.setState({
                    time: this.state.time
            })
        }
        }, 50);
      }
    
    handleClick = (e) => {
        this.setState({
             clickNumber: this.state.time > 0 ? this.state.clickNumber += 1 : this.state.clickNumber = this.state.clickNumber
        }) 
        console.log("kilknięto");
        console.log(this.state.clickNumber);
    };   
        
    componentWillUnmount(){
        clearInterval(this.milisecondCounter);
    }

    render () {
        return (
            <div>
                <p>Masz 2 sekundy na klikanie, spróbuj kliknąć jak najwięcej razy, powodzenia!</p>
                <h1>aktualny czas:  {parseInt(this.state.time) } </h1>
                <h2>liczba punktów: { parseInt(this.state.clickNumber) } </h2>
                <button onClick = {this.handleClick} >kliknij mnie:)</button>
                <p>Brawo, masz tyle punktów: {this.state.clickNumber}, odśwież i spróbuj jeszcze raz!</p>
            </div>
        )}
    }


class App extends Component {
    render () {
        return (
            <div>
                <SpeedClickGame time = {2000} />
            </div>
        ) }
        }

ReactDOM.render(<App />, document.getElementById("app"));

