import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 2 - `js/task02.js`
// Stwórz komponent `AddTwoNumbers`.
// Ma renderować `form`, a w nim dwa `input type="text"` oraz `h1`. 
// W `h1` ma się na żywo wyświetlać wynik dodawania dwóch liczb. 
// Pobieraj je z elementów `input` pamiętając o konwersji na typ `Number`.
// Jeżeli któraś dana z elementów `input` po konwersji da NaN (użyj `isNaN()`), 
// to wypisz w `h1` "Podaj dwie liczby.".

class AddTwoNumbers extends Component {
    state = {
      firstNumber:0,
      secondNumber: 0,
    };
   
    handleChange = e => {
      this.setState({
        [e.target.name]: parseInt(e.target.value),
        
      });
    }

    render() {
        const {firstNumber, secondNumber} = this.state
      return (
        <form >
            <input type="text" name= "firstNumber"  onChange={this.handleChange}/>
            <input type="text" name= "secondNumber"  onChange={this.handleChange}/>
            <h1> 
                {isNaN(firstNumber) || isNaN(secondNumber) ? 
                    'Podaj liczby' : 
                    'Suma to: ' + (firstNumber + secondNumber) }
            </h1>
        </form>
      );
    }
  }
  
  function App() {
    return <AddTwoNumbers/>;
  }
  
  ReactDOM.render(<App/>, document.getElementById("app"));


  // możemy odnosić się do kluczy obiektu poprzez nawiasy kwadratowe: [e.tagret.name]: e.target.value. 
  // Taki zapis w metodzie setState sprawi, że stan będzie aktualizowany dla każdego inputa.