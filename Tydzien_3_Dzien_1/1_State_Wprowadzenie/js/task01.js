import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 1
// Stwórz komponent `SateTest`, który w swoim konstruktorze ma mieć zdeklarowany stan wewnętrzny:
// ```js
// this.state = {
//   currentChapter: "Wprowadzenie do state",
//   page: 87
// }
// ```
// Następnie w metodzie `render`, wygeneruj element `header` a w nim `h3` z wartością spod `currentChapter` a także `h4` z wartością `page`.
//  Wartości mają być pobrane ze `state` komponentu.
// Stwórzcie również komponent `App` który ma renderować komponent `StateTest`.

// class SateTest extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentChapter: "Wprowadzenie do state",
//       page: 87
//     }
//   }
//   render () {
//     return(
//     <header>
//       <h3>{this.state.currentChapter}</h3>
//       <h4>{this.state.page}</h4>
//     </header> 
//     )
// }
// }

// ReactDOM.render(
// <SateTest/>,
//   document.getElementById("app")
// );

class SateTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChapter: "Wprowadzenie do state",
      page: 87
    }
  }
  render () {
    return(
    <header>
      <h3>{this.state.currentChapter}</h3>
      <h4>{this.state.page}</h4>
    </header> 
    )
}
}

class App extends Component {
  render () {
    return (<SateTest/>)
  }
}

ReactDOM.render(
<App/>,
  document.getElementById("app")
);
