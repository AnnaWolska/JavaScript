import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 0a - `js/task0a.js`
// Stwórz komponenty `ParentComponent`, `ChildComponent` oraz `GrandchildComponent`.
// - Niech `ParentComponent` renderuje `ChildComponent`, przekazując mu jako dzieci swoje dzieci.
// - `ChildComponent` renderuje `GrandchildComponent`, przekazując mu jako dzieci swoje dzieci.
// - `GrandchildComponent` po prostu wyświetla swoje dzieci.
// Wyrenderuj i przetestuj swój komponent za pomocą takiej konstrukcji:
// ```js
// <ParentComponent>
//   <h1>To działa!</h1>
// </ParentComponent>
// ```
// Kod ten powinien wyświetlić taką strukturę:
// ```
// -- ParentComponent
//     |-- ChildComponent
//           |-- GrandchildComponent
//                 |-- <h1>To działa!</h1>
// ```


class ParentComponent extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class ChildComponent extends Component {
    render () {
        return (
            <div>
                {this.props.children} 
            </div>
           
        )
    }
}

class GrandchildComponent extends Component {
    render () {
        return (
            <div>
                  <h1>To działa!</h1>
            </div>
        )
    }
}



function App() {
    return < ParentComponent>
             <ChildComponent>
                 <GrandchildComponent/>
             </ChildComponent>
           </ParentComponent>;
};

ReactDOM.render(<App />, document.getElementById("app"));

