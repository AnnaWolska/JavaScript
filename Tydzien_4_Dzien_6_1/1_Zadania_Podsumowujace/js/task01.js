import React from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1 - `js/task01.js`
// Stwórz komponent **funkcyjny** `UserCard`. Ma on przez `prop` przyjmować:
// - Imię `name`
// - Nazwisko `surname`
// - Adres ``address``
// - Kod Pocztowy `postcode`
// - Miejscowość `city`
// Komponent ma renderować (przykład w `HTML`):
// ```html
// <div class="card">
//   <div>
//     <h5>{Imię} {Nazwisko}</h5>
//     <div>{Adres}</div>
//     <div>{Kod Pocztowy} {Miejscowość}</div>
//   </div>
// </div>
// ```
// Imię, nazwisko, adres, i miejscowość mają być **niepustymi stringami**. 
// Kod pocztowy ma się składać z **dokładne 5 lub 6 znaków**. 
// Jeżeli którykolwiek z warunków nie jest spełniony, to wyrenderuj (przykład w `HTML`):
// ```html
// <div class="alert alert-danger">
//   Dane są nieprawidłowe!
// </div>
// ```
// Wyrenderuj ten komponent dla dowolnych danych.
// **Pamiętaj o stworzeniu również funkcyjnego komponentu `App`, 
// który będzie renderował komponent do tego zadania.**

function UserCard (props) {
    if (props.name.length === 0 || props.surname.length === 0 || props.address.length === 0 || props.city.length === 0 || props.postcode.length < 5 || props.postcode.length > 6) {
        return (
            <div className ="alert alert-danger">
                Dane są nieprawidłowe!
            </div>
        )
    } else {
        return (

                <div className = "card">
                <div>
                <h5>{props.name} {props.surname}</h5>
                <div>{props.address}</div>
                <div>{props.postcode} {props.city}</div>
                </div>
            </div>

        )
    }
}

function App() {
    return < UserCard name = "Anna" surname = "Wolska" address = "Moja" postcode = "00000" city = "Bagno"/>;
};

/**
 * Nie modyfikuj kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));

export default App;
