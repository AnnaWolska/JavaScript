import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1 - `js/task01.js`
// Stwórz komponent `TextField`.
// Ma renderować element `div`, a w nim elementy `p` i `select` oraz `span`.
// Podczas wybierania opcji z elementu `select` ma się ona na żywo pokazywać w `p`,
//  a w elemencie `span` liczba znaków wybranego elementu.


class TextField extends Component {
    state = {
      title:"Mr",
    };
  
    handleTitleChange = e => {
      this.setState({
        title: e.target.value,
      });
      console.log(this.state.title)
    };
  
    render() {
      return (
        <div>
            <p>{this.state.title}</p>
            <select value={this.state.title} onChange={this.handleTitleChange}>
                <option value="ms">Ms</option>
                <option value="mrs">Mrs</option>
                <option value="mr">Mr</option>
            </select>
            <h1>
                <span> ile liter ma wybrany tytuł: {this.state.title.length}</span>
            </h1>
            
        </div>
      );
    }
  }
  
  function App() {
    return <TextField/>;
  }
  
  ReactDOM.render(<App/>, document.getElementById("app"));



