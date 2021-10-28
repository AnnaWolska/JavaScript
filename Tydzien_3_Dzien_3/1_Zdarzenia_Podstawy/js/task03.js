import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 3 - `js/task03.js`
// Stwórz komponent z elementem `div`.
// Zareaguj na zdarzenia: kliknięcia, najechania, opuszczenia kursorem tego elementu - 
// wypisując odpowiednią informację w konsoli.

class DivTest extends Component {
    clickWork () {
        console.log("Kliknięto!");
    }
    mouseEnterWork () {
        console.log("Najechano na przycisk!");
    }
    mouseLeaveWork () {
        console.log("Zjechano z przycisku!");
    }
   
    render(){
      return (
        <>
          <h2>kliknij, najedź na przycisk, opusć przycisk</h2>
          
            <div style={{height:'300px', width:"200px", backgroundColor:"blue"}}
            onMouseEnter={this.mouseEnterWork} 
            onClick={this.clickWork} 
            onMouseLeave={this.mouseLeaveWork}> to jest mój div</div>
        </>
      );
    }
  }

ReactDOM.render(<DivTest/>, document.getElementById("app"));



