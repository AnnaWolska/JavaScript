import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";


// ### Zadanie 2 - `js/task02.js`
// Stwórz komponent `ProductsList` który ma składać się ze stanu wewnętrznego komponentu: 
// ```js
// {
//   products: ["banana", "orange", "apple", "peach"]
// }
// ```
// Celem zadania jest wyświetlenie listy produktów w formacie `ul > li` korzystając ze stanu wewnętrznego `this.state`.

class ProductsList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      products: ["banana", "orange", "apple", "peach"]
    }
  }
  render () {
    return(
      <React.Fragment>
        {this.state.products.map( (element,index)  => {
          
          return(
            <ul>
        <li key = {index} >
          {element}
          </li>
        </ul>
          );
        })}
      </React.Fragment>
    )
}
}

class App extends Component {
  render () {
    return (<ProductsList/>)
  }
}

ReactDOM.render(
<App/>,
  document.getElementById("app")
);

// Warning: Each child in a list should have a unique "key" prop.