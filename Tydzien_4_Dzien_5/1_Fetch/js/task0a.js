import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 0a - `js/task0a.js`
// Stwórz komponent `BookInfo`, który przez props przyjmuje ISBN książki (`isbn`).
// Za pomocą `fetch()` wykonaj zapytanie na adres otwartego API:
//  > `https://www.googleapis.com/books/v1/volumes?q=isbn:{numerISBN}`
// gdzie zamiast `numerISBN` podasz ISBN przekazany w props.
// Otrzymasz w odpowiedzi JSON, a z niego obiekt, w którym interesuje Cię tablica pod kluczem `items`, 
// a w niej pierwszy element - obiekt z informacją o książce.
// Niech komponent wyrenderuje w `div` element `h1` z tytułem (jest w tym obiekcie pod kluczem `volumeInfo.title`.
// Pamiętaj o zablokowaniu wyświetlania komponentu dopóki nie otrzymasz odpowiedzi z serwera.
// Przetestuj swój komponent w ten sposób:
// ```JS
// <BookInfo isbn="0747532699" />
// ```

class  BookInfo extends Component {
    state = {
      book: false
    };
   
    async componentDidMount() {
      try {
        const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${this.props.isbn}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
          book: data.items[0]
        });
   
      } catch(err) {
        console.log(err);
      }
    }
   
    render() {
      if (!this.state.book)
        return <h1>Ustalam adres IP...</h1>
   
      return (
        <div>
            <h1>Twoje dane: {this.state.book.volumeInfo.title}</h1>
        </div>
      )
    }
  }


function App() {
    return < BookInfo isbn="0747532699"/>;
};

ReactDOM.render(<App />, document.getElementById("app"));

