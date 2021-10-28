import React, {Component} from "react";
import ReactDOM from "react-dom";

// ### Zadanie 2 - `js/task02.js`
// > Do wykonania tego zadania możesz potrzebować 
// przekazywać w evencie pewną własną unikalną informację.
// > Wystarczy zrobić to w wyrażeniu JSX bezpośrednio podczas tworzenia elementu.
// > Zobacz na przykładzie, jak możesz to zrobić:
// > ```js
// > <button onClick={e => this.handleClick( e, index );}/>
// > ```
// Stwórz komponent z 15 przyciskami z napisem "Klik!". 
// Każdy z przycisków musi mieć swój własny `state`. 
// Aby szybko stworzyć tyle przycisków możesz posłużyć się tym kodem:
// ```js
// /**
// * Każdy z elementów tablicy będzie miał wartość
// * false - czyli nie kliknięty
// */
// state: {
//   buttons: Array(15).fill(false)
// }
// ```
// Po kliknięciu na dowolny przycisk zmienia on 
// (**ten konkretnie wciśnięty przycisk**) swój tekst na "Kliknięty". 
// Możemy zmieniać stan danego przycisku z `false` na `true`.

class ManyButtons extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            setButtons: Array(15).fill(false)
        };
       

    }
    handleClick = (e) => {
        e.preventDefault();
        const buttons = Array(15).fill(false)
        this.setState({
            setButtons: buttons.map( (item, index) => ( 
            index === parseFloat(e.target.value)) ? !item : item )
        }) 
    };   
        
    render() {
        const buttons = this.state.setButtons
        return (
            <>
            {buttons.map( (item, index) => (
            <button value={index} key={index} style={{margin: '5px'}} onClick={this.handleClick}>
                {index+1}: {buttons[index] ? 'Kliknięty': 'not clicked'}
            </button>
            ) 
            )}
            </> 
    )
    };
}

const App = () => < ManyButtons  />;
ReactDOM.render(<App />, document.getElementById("app")); 





// ze slacka:
// import React, { Component } from "react";
// import "./styles.css";

// class Message extends Component {
//   handleConfirm = () => {
//     console.log("Potwierdzono!");
//   };
//   render() {
//     return (
//       <div>
//         <p>Lorem Ipsum dolor sit amet.</p>
//         <Button onConfirm={this.handleConfirm} text={"Potwierdzam"} />
//       </div>
//     );
//   }
// }

// reaguje ma kliknięcie ale to co robi ma przesłane z propsów jako funkcja
// class Button extends Component {     
//   handleClick = () => {
//     this.props.onConfirm();
//   };
//   render() {
//     return <button onClick={this.handleClick}>{this.props.text}</button>;
//   }
// }

// nie działa:
// export default function App() {
//   return (
//     <div className="App">
//       <Message />
//     </div>
//   );
// }

// const App = () => <Message />;
// ReactDOM.render(<App />, document.getElementById("app")); 




// z gita:

// function App() {

//     const [buttons, setButtons] = React.useState(Array(15).fill(false))          

//     const handleClick = (e) => {
//           setButtons(
//             buttons.map( (item, index) => ( 
//                 index === parseFloat(e.target.value)) ? !item : item )
//           )
//     }    
//         return <>
//             {buttons.map( (item, index) => (
//                 <button value={index} key={index} style={{margin: '5px'}} onClick={handleClick}>
//                     {index+1}: {buttons[index] ? 'Kliknięty': 'not clicked'}
//                 </button>
//                 ) 
//             )}
//         </> 
// }

// ReactDOM.render(<App />, document.getElementById("app"));