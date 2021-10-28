import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 0a - `js/task0a.js`
// Stwórz komponent `HelloWorld`, który przechowuje tekst do wyświetlenia jako stan lokalny. 
// Niech napis będzie domyślnie nastawiony na "Hello, World!".
// Komponent ma wyrenderować ten napis w elemencie `h1`.
// Dodaj do swojego komponentu timer, który po **5 sekundach** zmieni ten tekst na "Hi, Everyone!". 
// Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia, a także aby zwolnić zasoby.
// Dodaj `console.log` do każdej metody cyklu życia.
// Zajrzyj do konsoli. Które metody cyklu życia zostały wywołane, dlaczego? 
// Widzisz różnicę w porównaniu z wielokrotnym użyciem `ReactDOM.render()`?
// Pamiętaj aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty 
// budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello, World!"
        };
        console.log("constructor ok");
    }

    componentDidMount(){
        this.timer = setTimeout(() => {
            this.setState({
                text: "Hi, Everyone!"
            });
        }, 5000);
        console.log("komponent zamontowany");
      }

    componentWillUnmount(){
        clearTimeout(this.timer);
        console.log("komponent odmontowywany"); 
      } 

    render () {
        console.log("renderowanie");
        return (
            <h1>{this.state.text}</h1>
        )}

}
class App extends Component {
    render () {
        return <HelloWorld/>
    }

  }
  
ReactDOM.render(<App/>, document.getElementById("app"));
