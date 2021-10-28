import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 2 - `js/task02.js`
// Stwórz komponent z przyciskiem o nazwie `ButtonTest`. 
// Po **najechaniu** na przycisk wypisz w konsoli: "Najechano na przycisk!".
// Zadanie spróbuj rozwiązać za pomocą komponentu klasowego i funkcyjnego.

// KLASOWO
// class ButtonTest extends Component {
//     mouseWork () {
//       console.log("Najechano na przycisk!");
//     }
   
//     render(){
//       return (
//         <>
//           <h2>najedż na przycisk</h2>
//           <button onMouseEnter={this.mouseWork}>Start!</button>

//         </>
//       );
//     }
//   }

// ReactDOM.render(<ButtonTest/>, document.getElementById("app"));

// FUNKCYJNIE

const ButtonTest = () => {
    const mouseHandler = () => console.log ("Najechano na przycisk!")
    return <button onMouseEnter={mouseHandler}>Start!</button>
}
    

ReactDOM.render(<ButtonTest/>, document.getElementById("app"));
