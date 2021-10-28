import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 01 - `js/task01.js`
// Stwórz komponent `Modal`. Przyjmuje on przez props wartość `heading`, np. 
// "Zapisz się do newslettera". Wyświetla on tego propsa w elemencie `h2`.
// Komponent ten ma wyrenderować tekst, który znajduje się w props `heading` 
// dopiero po 10 sekundach. W tym celu w odpowienim cyklu życia swtórz `timer`, 
// który wyczeka 10 sekund, a po tym czasie zaktualizuje **stan wewnętrzny komponentu** 
// (np. wartość `this.state.modalOpen`) z `false` na `true`, a tym samym uruchomi ponownie render 
// i wyświetli informację z propsa.
// Ma on być wyrenderowany w komponencie `App`:
// ```js
// function App() {
//   return (
//     <div>
//       <h1>Test okna modalnego</h1>
//       <Modal heading="Zapisz się do newslettera" />
//     </div>
//   )
// }
// ```
// Jeżeli stan wewnętrzny komponentu `Modal` nastawiony jest na `false`, 
// komponent ten powinien renderować `null`.

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: this.props.heading,
            modalOpen: false,
        }
    }
    componentDidMount(){
        this.afterLaunch = setTimeout(() => {
            this.setState({
                modalOpen: true
            });
        }, 7000);
      }
    
    componentWillUnmount(){
        clearTimeout(this.timer);
    }

    render () {
        return (
            <>
            {this.state.modalOpen ? <h2>{this.state.heading}</h2> : null}  
            </>
        )}
    }//ale o co chodzi....???

class App extends Component {
    render () {
    return (
        <div>
            <h1>Test okna modalnego</h1>
            <Modal heading= "Zapisz się do newslettera" />
            </div>
    ) }
    }

ReactDOM.render(<App />, document.getElementById("app"));

