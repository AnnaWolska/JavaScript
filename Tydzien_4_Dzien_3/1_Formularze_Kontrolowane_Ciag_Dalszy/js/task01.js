import React, { Component } from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1 - `js/task01.js`
// Stwórz komponent o nazwie `PeselInput`.
// Ma on wyświetlać w elemencie `form` elementy `input` oraz drugi `div`.
// `input` ma być kontrolowanym elementem formularza. Podczas wpisywania 
// sprawdzaj czy wpisany tekst ma 11 znaków i czy są to same cyfry:
// - Jeżeli tak, to w wewnętrznym elemencie `div` wyświetl `input type="submit"` 
// z napisem "Prześlij" (póki co nie ma nic robić);
// - Jeżeli nie, to w wewnętrznym elemencie `div` 
// wyświetl informację "Niepoprawny numer PESEL".

class PeselInput extends Component {
    state = {
        pesel: "",
        isPesel: false,
    };

    handleChange = e => {
        let input = event.target.value
        let isPesel = ''
        if (input.length === 11) { isPesel = true } 
        this.setState({
            pesel: input,
            isPesel: isPesel
        });
    };

    render() {
            return (
                <form>
                    <input type="number" onChange={this.handleChange} />
                    {this.state.isPesel ? <div>  <input type="submit"  value="Prześlij" /></div> : <div> Niepoprawny numer PESEL </div>}
                        <h1>Twój pesel: {this.state.pesel}</h1>
                </form>
            )
        };
    };


function App() {
    return <PeselInput />;
};

ReactDOM.render(<App />, document.getElementById("app"));


