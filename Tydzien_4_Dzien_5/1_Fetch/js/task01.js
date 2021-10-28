import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1 - `js/task01.js`
// > Aby poprawnie wykonać to zadanie musisz mieć zainstalowany `json-server`.
// > W folderze `database` znajduje się  plik `cars.json` z gotową bazą lokalną samochodów.
// > Uruchomienie json-server:
// > ```bash
// > json-server database/cars.json --watch
// > ```
// #### Część 1
// Stwórz komponent `CarsDbManager`.
// Za pomocą `fetch()` wykonaj zapytanie do swojego lokalnego serwera tak, aby pobrać listę wszystkich aut.
// Następnie zbuduj listę (pamiętaj o odpowiednich kluczach), w której będziesz wyświetlał dla każdego auta
//  wszystkie dostępne informacje oraz przycisk "Sprzedany".
// Po kliknięciu na ten przycisk powinieneś wykonać odpowiednie zapytanie, które usunie daną pozycję z bazy 
// lokalnej. Następnie zmodyfikuj state tak, żeby odzwierciedlić zmiany. **Nie odświeżaj strony!**.
// Niech komponent wyrenderuje w `div` element `ul` z elementami listy samochodów.
// Pamiętaj o zablokowaniu wyświetlania komponentu dopóki nie otrzymasz odpowiedzi z serwera.

// #### Część 2
// Stwórz komponent `AddCar`, który będzie zawierał formularz służący do dodania samochodu do bazy danych. 
// Musi zawierać pola:
// - Nazwa [name]
// - Marka [brand]
// - Silnik
//     - Typ [type]
//     - Moc [hp]
//  Po dodaniu auta do bazy ma ono również pojawić się na liście samochodów. **Nie należy wysyłać ponownego 
//  zapytania do bazy ani odświeżać strony!**.

// #### Część 3 - dodatkowa
// Stwórz komponent `Car`, który będzie miał za zadanie wyświetlać tylko jeden samochód z bazy danych. 
// Należy tak zmodyfikować zadanie aby po pobraniu danych z bazy generować komponenty `Car` i przekazywać 
// do nich przez `props` wszystkie niezbędne dane, a także callback funkcji, która usunie auto z bazy i odświeży widok.
// Komponent ten należy rozbudować o **Edycję** samochodu. Dodaj przycisk **Edytuj**, po którego 
// kliknięciu ma pojawić się formularz do edycji tego konkretnego auta. Po kliknięciu **Zapisz** 
// dane mają zapisać się w bazie danych, a taże zaktualizować na stronie.
// Formularz należy walidować: pola nie mogą być puste a konie mechaniczne muszą być tylko cyframi.


class CarsDbManager extends Component {
    state = {
        cars: false
      };
     
      async componentDidMount() {
        try {
          const url = 'http://localhost:3000/cars';
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          this.setState({
            cars: data
          });
     
        } catch(err) {
          console.log(err);
        }
      }
     
      render() {
          const {cars, id} = this.state
        if (!cars) {
          return <h1>Szukam danych...</h1>
        } else {
        return (
          <ul>
              {cars.map(car => (
                  <li key={cars.id}> <p>{`${car.id}: ${car.name} ${car.brand}`}</p></li>
              ))}
          </ul>
        )
        }
    }
}



function App() {
    return < CarsDbManager/>;
};

ReactDOM.render(<App />, document.getElementById("app"));
