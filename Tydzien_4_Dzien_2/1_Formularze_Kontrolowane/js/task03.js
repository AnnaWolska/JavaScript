import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 3 - `js/task03.js`
// Stwórz komponent `InteractiveDiv`.
// Ma renderować `div`, a w nim `input type="`**`number`**`"` oraz wewnętrzny `div`. 
// Ten wewnętrzny `div` ma mieć następujące style:
// - Wysokość: `100px`,
// - Szerokość: z elementu `input` `+'px'`,
// - Kolor tła: czerwony.
// Przy zmianie wartości inputa powinna się zmieniać automatycznie 
// szerokość wewnętrznego elementu `div`. Pamiętaj o konwersji na typ `Number`.

class InteractiveDiv extends Component {
  state = {
    style: {
    height : '200 px',
    width : '70px',
    backgroundColor: 'red'
    },
  };
     
    handleChange = e => {
      this.setState({
        style: {
          height: '100px',
          backgroundColor: 'red',
          width: event.target.value + 'px'
      },
        
      });
    }

    render() {
      const {style} = this.state  
      return (
        <div>
            <input type="number" name={this.state.style.width}   onChange={this.handleChange}/>
            <div style = {style}>
            </div>
        </div>
      );
    }
  }
  
  function App() {
    return <InteractiveDiv/>;
  }
  
  ReactDOM.render(<App/>, document.getElementById("app"));
