import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1 - `js/task01.js`
// Stwórz komponent `MyButton`.
// Ma on zawierać jeden przycisk, który wyświetla na początku "NIE". 
// Po jego kliknięciu napis ma się zmienić na "TAK", po następnym kliknięciu z powrotem na "NIE" itd. 
// **Aby wyświetlić odpowiedni tekst użyj operatora trójargumentowego bezpośrednio wewnętrz JSX.**


class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yesOrNo: false,
        };
    }
    handleYes = (e) => {
        this.setState({
            yesOrNo: !this.state.yesOrNo,
        });
        console.log("kliknięto")
        };

    render () {
        const { yesOrNo } = this.state; 
        return (
            <button onClick={this.handleYes}>  { yesOrNo? "Tak" : "Nie" }  </button>
        )
    }
}

class App extends Component {
    render () {
        return  < MyButton />
         }
        };

ReactDOM.render(< App />, document.getElementById("app"));




// srugi sposób z komponentem w zmiennej i warunkowym renderowaniem


// class YesOrNo extends Component {
//     state = {
//       yes: false
//     };
  
//     handleTurnOffClick = () => {
//       this.setState({
//         yes: false
//       });
//     };
  
//     handleTurnOnClick = () => {
//       this.setState({
//         yes: true
//       });
//     };
  
//     render() {
//       let hereYes;
//       if (this.state.yes) {
//         hereYes = <ShowYes onClick={this.handleTurnOffClick}/>;
//       } else {
//         hereYes = <ShowNo onClick={this.handleTurnOnClick}/>;
//       }
//       return (
//         <div>
//           <h1>przycisk</h1>
//           {hereYes}
//         </div>
//       );
//     }
//   }
  
  
//   class ShowNo extends Component {
//     render() {
//       return (
//         <>
//           <span>kliknij, żeby zrobić NIE</span>
//           <button onClick={this.props.onClick}>TAK</button>
//         </>
//       );
//     }
//   }
  
//   class ShowYes extends Component {
//     render() {
//       return (
//         <>
//           <strong>kliknij żeby zrobić TAK</strong>
//           <button onClick={this.props.onClick}>NIE</button>
//         </>
//       );
//     }
//   }
  
//   function App() {
//     return <YesOrNo/>;
//   }
  
//   ReactDOM.render(<App/>, document.getElementById("app"));
